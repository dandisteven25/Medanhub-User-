import { ElasticsearchService } from './../../services/elasticsearch.service';
import { Component, OnInit, Input } from '@angular/core';
import { Customer} from 'src/app/customer';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.scss'],
})
export class ShowCustomersComponent implements OnInit {
  @Input() customer: Customer;

  constructor(private es: ElasticsearchService) { }

  ngOnInit() {
  }

}
