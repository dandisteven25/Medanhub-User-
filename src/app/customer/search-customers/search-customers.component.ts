import { FormLaporanPage } from './../../form-laporan/form-laporan.page';
import { ElasticsearchService } from './../../services/elasticsearch.service';
import { Component, OnInit } from '@angular/core';
import { CustomerSource } from 'src/app/customer';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.scss'],
})
export class SearchCustomersComponent implements OnInit {

  private static readonly INDEX = 'kategori';
  private static readonly TYPE = '_doc';

  customerSources: CustomerSource[];
  private queryText = '';

  private lastKeypress = 0;

  constructor(private es: ElasticsearchService) {this.queryText = ''; }

  ngOnInit() {}

}
