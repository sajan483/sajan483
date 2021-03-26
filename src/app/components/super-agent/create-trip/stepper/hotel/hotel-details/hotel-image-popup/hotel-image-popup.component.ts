import { Component, OnInit, Input } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-hotel-image-popup',
  templateUrl: './hotel-image-popup.component.html',
  styleUrls: ['./hotel-image-popup.component.scss']
})
export class HotelImagePopupComponent implements OnInit {
  showHotelImages: boolean;
  hotelRating: any;
  imageshow: any;

  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["&#8249;", "&#8250;"],
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 4,
      },
      740: {
        items: 6,
      },
      940: {
        items: 10,
      },
    },
    nav: true,
  };

  constructor() {}
  imagecollection=[
    'https://cf.bstatic.com/images/hotel/max500/460/46047550.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rmWcGKxi-YvcS-OZqacyLW9uhsLrf53WzwyxCWzjbJE7UOYQxUjTyiDiiFzWd5N4uq4&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBt4CquiQcAy7gkRiYEkI_vcwKeaFK0nDRpQ&usqp=CAU',
    'https://cf.bstatic.com/xdata/images/hotel/270x200/252216587.jpg?k=b51babb01a84901762994170f5d70af2f25b9751b5290a54232a410a32050da2&o=',
    'https://cf.bstatic.com/images/hotel/max500/460/46047550.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rmWcGKxi-YvcS-OZqacyLW9uhsLrf53WzwyxCWzjbJE7UOYQxUjTyiDiiFzWd5N4uq4&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBt4CquiQcAy7gkRiYEkI_vcwKeaFK0nDRpQ&usqp=CAU',
    'https://cf.bstatic.com/xdata/images/hotel/270x200/252216587.jpg?k=b51babb01a84901762994170f5d70af2f25b9751b5290a54232a410a32050da2&o=',
    'https://cf.bstatic.com/images/hotel/max500/460/46047550.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rmWcGKxi-YvcS-OZqacyLW9uhsLrf53WzwyxCWzjbJE7UOYQxUjTyiDiiFzWd5N4uq4&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBt4CquiQcAy7gkRiYEkI_vcwKeaFK0nDRpQ&usqp=CAU',
    'https://cf.bstatic.com/xdata/images/hotel/270x200/252216587.jpg?k=b51babb01a84901762994170f5d70af2f25b9751b5290a54232a410a32050da2&o='
  ];

  ngOnInit() {
    this.showHotelImages = true;
    this.hotelRating = 4;
    this.imageshow = 0;
  }

  closeHtlImgPopup() {
    this.showHotelImages = false;
  }
  
}
