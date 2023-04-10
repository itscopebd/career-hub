import React, { useEffect, useState } from 'react';
import Banner from './components/Banner/Banner';
import CategoryList from './components/CategoryList/CategoryList';
const HomePage = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("data/categoryList.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    return (
        <>
            <Banner></Banner>
          <CategoryList category={category}></CategoryList>
        </>
    );
};

export default HomePage;