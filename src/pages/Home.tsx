import Product from './Product';

interface Data {
  title: string;
  description: string;
  info: string;
  image: string;
}

const Home = () => {
  const products: Data[] = [
    {
      title: 'Hoodie',
      description: 'Made in China',
      info: '95% Cotton 5% Polyester',
      image: 'hoodie.jpg',
    },
    {
      title: 'T-Shirt',
      description: 'Made in USA',
      info: '100% Cotton',
      image: 'tshirt.jpg',
    },
    // Add more products as needed
  ];

  return (
    <div>
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          Description={product.description}
          info={product.info}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default Home;
