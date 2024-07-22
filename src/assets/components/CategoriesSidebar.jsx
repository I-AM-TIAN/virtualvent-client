import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/sidebarcategories.css';

const CategoriesSidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    return (
        <div className="categories-sidebar">
            <h2>Categorías</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesSidebar;
