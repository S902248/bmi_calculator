export default function ProductCard({
    brand,
    category,
    price,
    id
}){
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td>
//     add Link here and keep the data-testid="brand" on Link tag      
            </td>
            <td data-testid="category">
            </td>
            <td data-testid="price">
            </td>
                    </tr>
    )
}


// ProductsTable.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductsTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            brand={product.brand}
            category={product.category}
            price={product.price}
            id={product.id}
          />
        ))}
      </tbody>
    </table>
  );
};

// export default ProductsTable;
