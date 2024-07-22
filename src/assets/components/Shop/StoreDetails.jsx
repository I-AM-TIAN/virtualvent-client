import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../css/app.css";
import ShopNavbar from "./ShopNavbar";
import ProductList from "./ProductList";

const StoreDetails = () => {
  const [products, setProducts] = useState([]);
  const [idCorporativo, setIdCorporativo] = useState(null);
  const storeURL = window.location.pathname;

  useEffect(() => {
    const fetchIdCorporativo = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/corporativo?url=${storeURL}`);
        setIdCorporativo(response.data.id_corporativo);
      } catch (error) {
        console.error('Error fetching id_corporativo:', error);
      }
    };

    fetchIdCorporativo();
  }, [storeURL]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (idCorporativo) {
        try {
          const response = await axios.get(`http://localhost:8000/api/productos/${idCorporativo}`);
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    };

    fetchProducts();
  }, [idCorporativo]);

  const { url } = useParams();
  const [store, setStore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/store/${url}`)
      .then((response) => {
        setStore(response.data);
      })
      .catch((error) => {
        setError("Error fetching store details");
      });
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
