import React from 'react';

interface ProductCardProps {
  title: string;
  imageSrc: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageSrc, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-600">{price}</p>
    </div>
  );
};

export default ProductCard;
