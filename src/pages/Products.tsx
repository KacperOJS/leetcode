import { v4 as uuidV4 } from 'uuid';

export interface ProductData {
  id: string;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

const products: ProductData[] = [
  {
    id: uuidV4(),
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: uuidV4(),
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // Add more products as needed
];

export default products;
