import React from 'react';

interface ProductProps {
  title: string;
  Description: string;
  info: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({ title, Description, info, image }) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={divStyle}>
      <h3>{title}</h3>
      <p>{Description}</p>
      <p>{info}</p>
    </div>
  );
};

export default Product;
