import React, { useEffect, useState } from 'react';
import Banner from './components/Banner/Banner';
import CategoryList from './components/CategoryList/CategoryList';
import Jobs from './components/Jobs/Jobs';
const HomePage = () => {

    // category 
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch("data/categoryList.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);


// jobs 

const [jobs,setJobs]=useState([]);
useEffect(()=>{
fetch("data/jobs.json")
.then(res=>res.json())
.then(data=>setJobs(data))
},[])
    return (
        <>
            <Banner></Banner>
          <CategoryList category={category}></CategoryList>
          <Jobs jobs={jobs}></Jobs>
        </>
    );
};

export default HomePage;