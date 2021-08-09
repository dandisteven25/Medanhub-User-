import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch-browser';

@Injectable({
  providedIn: 'root',
})
export class ElasticsearchService {
  private client: Client;

  private queryalldocs = {
    query: {
      match_all: {},
    },
    sort: 'asc',
  };

  constructor() {
    if (!this.client) {
      this.connect();
    }
  }

  private connect() {
    this.client = new Client({
      // host: 'localhost:9200',
      host: '192.168.1.64:9200',
      log: 'trace',
    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello medanhub',
    });
  }

  addToIndex(value): any {
    return this.client.create(value);
  }

  getAllDocuments(_index, _type): any {
    return this.client.search({
      index: _index,
      type: _type,
      body: this.queryalldocs,
      filterPath: ['hits.hits._source'],
    });
  }

  getAllDocumentsWithScroll(_index, _type, _size): any {
    return this.client.search({
      index: _index,
      type: _type,
      scroll: '1m',
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
      body: {
        //'size': _size,
        query: {
          match_all: {
            // 'deskripsi': "asap"
          },
        },
        sort: {
          id: 'asc',
        },
        size: 1,
      },
      _source: ['id', 'nama_kategori', 'nama_layanan', 'deskripsi'],
    });
  }

  getNextPage(scroll_id): any {
    return this.client.scroll({
      scrollId: scroll_id,
      scroll: '1m',
      filterPath: ['hits.hits._source', 'hits.total', '_scroll_id'],
    });
  }

  fullTextSearch(_index, _type, _field, _queryText): any {
    return this.client.search({
      index: _index,
      type: _type,
      filterPath: [
        'hits.hits._source',
        'hits.total',
        '_scroll_id',
        'hits.hits._score',
      ],
      body: {
        query: {
          match: {
            [_field]: _queryText,
          },
        },
        size: 1,
      },
      _source: ['id', 'nama_kategori', 'nama_layanan', 'deskripsi'],
    });
  }
}
