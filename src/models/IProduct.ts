export interface IValueType {
  valueType: 'volume' | 'weight';
}

export interface IProduct {
  id: number;
  img: string;
  title: string;
  valueType: string;
  value: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  description: string;
  type: string[];
  price: number;
}
