import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded">
          <img
            src={product.image}
            alt={product.name}
            className="mb-2"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>ราคา:฿{product.price}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            onClick={() => addToCart(product)}
          >
            เพิ่มลงรถเข็น
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
