import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private commonservice: CommonserviceService) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.cartItems = this.commonservice.getCartItems();
    console.log('Cart Items:', this.cartItems);
  }

  removeItem(index: number): void {
    this.commonservice.removeFromCart(index);
    console.log('After removeItem:', this.commonservice.getCartItems());
    this.getCartItems();
  }

  clearCart(): void {
    this.commonservice.clearCart();
    console.log('After clearCart:', this.commonservice.getCartItems());
    this.getCartItems();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}