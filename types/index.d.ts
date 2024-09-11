export interface Order {
  id: number;
  orderTotal: number;
  orderDate: string;
  shippingAddress: string;
  customerName: string;
  customerEmail: string;
  lineItems: number[];
}

export interface LineItem {
  id: number;
  name: string;
  price: number;
  products: number[];
}

export interface Product {
  id: number;
  lineItemsId: number;
  productName: string;
  price: number;
}

export interface GiftBox {
  id: number;
  name: string;
  price: number;
  products: Product[];
}
