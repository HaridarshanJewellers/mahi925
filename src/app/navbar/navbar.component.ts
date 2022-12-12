import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  brands = [
    {title: "Home"},
    {title: "About us"},
    {title: "Privacy Policy"},
    {title: "Return Policy"},
    {title: "Contact Us"},

  ]

}
