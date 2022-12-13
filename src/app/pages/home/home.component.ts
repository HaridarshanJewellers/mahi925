import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainimg: string = '';
  name: string = "";
  id: number = 0;
  activeValue: number = 0;
  constructor() { }

  ngOnInit(): void {

    this.name = this.products[0].name
    this.mainimg = this.products[0].view

  }

  products = [
    {
      name: "RINGS",
      Link: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
      value: 1,
      view: "https://media.discordapp.net/attachments/908639378375581699/1051018042248802314/1.png?width=864&height=864"
    },
    {
      name: "EARRINGS",
      Link: "https://media.discordapp.net/attachments/908639378375581699/1050987937313067018/fjdb.webp",
      value: 2,
      view: "https://media.discordapp.net/attachments/908639378375581699/1051020716742557856/dc.png?width=864&height=864"

    },
    {
      name: "COUPLE RINGS",
      Link: "https://media.discordapp.net/attachments/908639378375581699/1050987936302239754/df.jpeg",
      value: 3,
      view: "https://media.discordapp.net/attachments/908639378375581699/1051022126372630528/3.png?width=864&height=864"

    },
    {
      name: "NECKLACES",
      Link: "https://media.discordapp.net/attachments/908639378375581699/1050987935773761576/dds.webp",
      value: 4,
      view: "https://media.discordapp.net/attachments/908639378375581699/1051019205518049381/2.png?width=864&height=864"

    },
    {
      name: "BRACELETS",
      Link: "https://media.discordapp.net/attachments/908639378375581699/1050987936826531902/dfv.webp",
      value: 5,
      view: "https://media.discordapp.net/attachments/908639378375581699/1051023466075258931/5.png?width=864&height=864"

    }

  ]


  collection = [
    {
      title: "Hershey ring",
      category: "rings",
      price: 0,
      img: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
    },
    {
      title: "Hershey ring",
      category: "rings",
      price: 0,
      img: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
    },
    {
      title: "Hershey ring",
      category: "rings",
      price: 0,
      img: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
    },
    {
      title: "Hershey ring",
      category: "rings",
      price: 0,
      img: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
    },
    {
      title: "Hershey ring",
      category: "rings",
      price: 0,
      img: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
    },
    {
      title: "Hershey ring",
      category: "rings",
      price: 0,
      img: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
    },
    {
      title: "Hershey ring",
      category: "rings",
      price: 0,
      img: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
    },
    {
      title: "Hershey ring",
      category: "rings",
      price: 0,
      img: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
    },
    {
      title: "Hershey ring",
      category: "rings",
      price: 0,
      img: "https://media.discordapp.net/attachments/908639378375581699/1050987936616824832/dfbkj.jpeg",
    },



  ]

  productViewer(id: number) {
    this.mainimg = this.products[id - 1].view;
    this.name = this.products[id - 1].name;
    this.activeValue = this.products[id - 1].value;
  }

}
