import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: "Number of Users" },
    { value: 100, label: "Revenue" },
    { value: 50, label: "Reviews"}
  ];

  items = [
    {
      image: 'assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is fantastic couch to sit in.'
    },
    {
      image: 'assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is great dresser to put stuff in.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
