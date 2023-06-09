import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Product } from './Types';

interface ExampleProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cartItems: Product[];
  setCartItems: (cartItems: Product[]) => void;
}

const Example = ({ isOpen, setIsOpen, cartItems, setCartItems }: ExampleProps) => {
  const totalAmount = cartItems.reduce((total: number, product: Product) => total + product.price * product.quantity, 0);

  useEffect(() => {
    if (totalAmount === 0) {
      setIsOpen(false);
    }
  }, [totalAmount, setIsOpen]);

  const handleRemoveFromCart = (productId: string) => {
    const updatedCartItems = cartItems.filter((item: Product) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    const updatedCartItems = cartItems.map((item: Product) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity,
        };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };
  

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setIsOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>

                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                  </div>

                  <ul role="list" className="mt-2">
                    {cartItems.map((product:any) => (
                      <li key={product.id} className="border-t border-gray-200">
                        <div className="flex items-start justify-between px-4 sm:px-6 pt-4 pb-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-md object-cover"
                                src={product.imageSrc}
                                alt={product.imageAlt}
                              />
                            </div>
                            <div className="ml-4">
                              <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
							  <select
  className="text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-[80px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  value={product.quantity}
  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>

                              <p className="mt-1 text-sm text-gray-500">Qty {product.quantity}</p>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <p className="text-sm font-medium text-gray-900">{product.price.toFixed(2)}$</p>
                            <button
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => handleRemoveFromCart(product.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{`${totalAmount.toFixed(2)}$`}</p>

                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => setIsOpen(false)}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Example;
