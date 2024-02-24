// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ProductsTable from '../components/ProductsTable';


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products'
        );
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductsTable data={products} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
