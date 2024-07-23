import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../css/app.css";
import ShopNavbar from "./ShopNavbar";
import ProductList from "./ProductList";

const StoreDetails = () => {
  const { url } = useParams();
  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStoreDetails = async () => {
      try {
        const storeResponse = await axios.get(`http://127.0.0.1:8000/api/store/${url}`);
        setStore(storeResponse.data);

        const productsResponse = await axios.get(`http://127.0.0.1:8000/api/store/${url}/products`);
        setProducts(productsResponse.data);
      } catch (error) {
        setError("Error fetching store details or products");
      }
    };

    fetchStoreDetails();
  }, [url]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ShopNavbar logo={`http://127.0.0.1:8000/storage/${store.logo}`} />
      <ProductList products={products} />
    </>
  );
};

export default StoreDetails;
