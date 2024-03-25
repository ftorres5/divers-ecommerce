import React, { useState } from 'react';
import { useGetProductsQuery } from '../state';
import Loading from './Loader';

export default function ProductList() {
  const { data, error, isLoading } = useGetProductsQuery();
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div><Loading/></div>;
  }

  let filteredProducts = data;

  if (categoryFilter) {
    filteredProducts = data.filter(product => product.category === categoryFilter);
  }

  return (
    <div className="bg-white">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6">
          <select value={categoryFilter} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {Array.from(new Set(data.map(product => product.category))).map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md text-primary-800">
                    <a href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
