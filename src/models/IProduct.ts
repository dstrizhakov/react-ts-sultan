export interface IProduct {
	id: number;
	img: string;
	title: string;
	valueType: 'volume'|'weight'|'dimentions';
	value: string;
	barcode: string;
	manufacturer:string;
	brand: string;
	description: string;
	type:string[];
	price: string;
}