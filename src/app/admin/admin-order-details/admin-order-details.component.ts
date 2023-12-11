import { Component } from '@angular/core';
import { CommonserviceService } from '../../commonservice.service';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.component.html',
  styleUrls: ['./admin-order-details.component.css']
})
export class AdminOrderDetailsComponent {
  public cartItems: any[] = [];
  public orderItems: any[] = [
    {
      orderId: 12323,
      orderStatus: 'New',
      orderDetails: [{
        item: "Vanilla",
        type: "Cup",
        size: "Medium",
        toppings: [
            {
                id: 1,
                name: "Oreo Crumbs",
                isSelected: false
            },
            {
                id: 2,
                name: "Chocolate Crunch",
                isSelected: false
            }
        ],
        customerComments: "",
        count: 1,
        price: 3.99
    }]
    }
];

  constructor(private commonservice: CommonserviceService) { }

  ngOnInit(): void {

    this.cartItems = this.commonservice.getCartItems();
    this.cartItems = this.cartItems.map((item, index) => {
      const productType = item.productType || 'default';
      const orderid = `${productType.toUpperCase()}${('000' + (index + 1)).slice(-3)}`;
      return {
        ...item,
        orderid: orderid
      }
    });
    console.log(this.cartItems, "at admin order details page");
  }


}
