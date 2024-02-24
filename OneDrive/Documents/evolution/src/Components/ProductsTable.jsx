function ProductsTable({data}){
    return (
            <table border="1px">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the data */}
                    {[].map((item) => {

                    })}
                </tbody>
            </table>
    )
}

export default ProductsTable


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
