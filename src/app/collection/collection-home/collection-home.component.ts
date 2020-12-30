import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer' },
    { name: 'Jill', age: 25, job: 'Engineer' },
    {name: 'Jack', age: 26, job: 'Engineer'}
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
