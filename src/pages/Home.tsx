import { useState } from 'react';
import Example from './ShoppingCart';
import { Product } from './Types';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [products] = useState<Product[]>([
    {
      id: '1',
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35.00',
      color: 'Black',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35.00',
      color: 'Black',
      quantity: 1,
    },
  ]);

  const addToCart = (product: Product) => {
	const isProductInCart = cartItems.some((item) => item.id === product.id);
	if (isProductInCart) {
		alert('You have it already in your basket')
		setIsOpen(true)
	  return; 
	}
	setCartItems((prevItems) => [...prevItems, product]);
	setIsOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };



  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {

            return (
              <div key={`${product.id}`} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      <button
                        className="ml-12 text-sm font-medium text-gray-900"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="ml-5 text-sm font-medium text-gray-900"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove from Cart
                      </button>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div className="flex mt-4 justify-between"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shopping Cart</h2>
        {cartItems.length > 0 && (
          <Example
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
