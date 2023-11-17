import { Component } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-flavours',
  templateUrl: './flavours.component.html',
  styleUrls: ['./flavours.component.css']
})
export class FlavoursComponent {
  selectedType: string = ''; // To store the selected type
  selectedSize: string = ''; // To store the selected size
  selectedToppings: any = []; // To store the selected toppings
  additionalRequest: string = ''; // To store additional comments
  selectedItem: string = '';
  selectedFlavor: any;

  constructor(private commonservice: CommonserviceService) {
    this.selectedToppings = []; // Initialize selectedToppings as an empty array
  }
  toppings: any[] = [
    { id: 1, name: 'Oreo Crumbs', isSelected: false },
    { id: 2, name: 'Chocolate Crunch', isSelected: false },
    { id: 3, name: 'Rainbow Sprinkles', isSelected: false },
    { id: 4, name: 'Chocolate Sprinkles', isSelected: false },
    { id: 5, name: 'Fudge', isSelected: false },
    { id: 6, name: 'Dry Nuts', isSelected: false },
    { id: 7, name: 'Fruits', isSelected: false },
    { id: 8, name: 'M & M', isSelected: false }
  ]

  public flavoursArray = [
    {
      id: "01",
      fName: "Vanilla",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "vanilla.jpg",
      price: 3.99
    },
    {
      id: "02",
      fName: "Strawberry",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "strawberry.jpg",
      price: 4.48
    },
    {
      id: "03",
      fName: "Chocolate",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "chocolate.jpg",
      price: 5.99
    },
    {
      id: "04",
      fName: "Pista",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "pista.jpg",
      price: 4.99
    },
    {
      id: "05",
      fName: "Butter Pecan",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "Butter Pecan.jpeg",
      price: 6.59
    },
    {
      id: "06",
      fName: "Neapolitan",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "neapolitan.jpg",
      price: 3.99
    },

    {
      id: "07",
      fName: "Butterscotch",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "butterscotch.jpg",
      price: 6.99
    },

    {
      id: "08",
      fName: "Raspberry Ripple",
      desc: "Lorem ipsum.....",
      additionalRequest: "",
      size: "",
      displayPic: "Raspberry.jpg",
      price: 7.99
    },

  ]
  counterValue: number = 1;
  priceVal: number = 0;

  increment() {
    this.counterValue++;
    this.priceVal = this.originalPrice * this.counterValue
  }

  decrement() {
    if (this.counterValue > 0) {
      this.counterValue--;
      this.priceVal = (this.originalPrice * this.counterValue)

    }
  }
  updateSelectedToppings(id: any, name: any) {
    this.toppings.filter(item => {
      if (item.id == id) {
        this.selectedToppings.push(item);
      }
    })
    console.log(this.selectedToppings)
  }
  addToCart() {
    const iceCreamDetail = {
      item: this.selectedItem,
      type: this.selectedType,
      size: this.selectedSize,
      toppings: this.selectedToppings,
      customerComments: this.additionalRequest,
      count: this.counterValue,
      price: this.priceVal,
      displayPic: this.selectedFlavor.displayPic 
    };

    console.log('Ice Cream Detail:', iceCreamDetail);
    this.commonservice.addToCart(iceCreamDetail);

    this.clearForm();

    const modalElement = document.getElementById('icecreamDetailModal');

    //if (modalElement) {
    ///modalElement.style.display = 'none';
    //} 
    //else {
    //console.error("Modal element with ID 'icecreamDetailModal' not found");
    //}
  }

  getFlavorPrice(selectedFlavor: any): number {
    return selectedFlavor ? parseFloat(selectedFlavor.price) : 0;
  }
  originalPrice: number = 0;

  openPopup(item: string) {
    this.selectedItem = item;
    this.selectedFlavor = this.flavoursArray.find(flavor => flavor.fName === item);
    const indx = this.flavoursArray.findIndex(x => x.fName === item)
    this.originalPrice = this.flavoursArray[indx].price;
    this.priceVal = this.originalPrice;
    this.selectedFlavor.displayPic = `/assets/images/${this.flavoursArray[indx].displayPic}`;
    console.log('Flavor Display Pic:', this.selectedFlavor.displayPic);
    console.log('Price Value:', this.priceVal);
  }
  clearForm() {
    this.selectedType = '';
    this.selectedSize = '';
    this.selectedToppings = [];
    this.additionalRequest = '';
    this.selectedItem = '';
    this.counterValue = 1;
  }

}
