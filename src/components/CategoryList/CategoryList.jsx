import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryList = (props) => {

    const { category } = props;

    return (

        <div className='text-center pt-24'>
            <h3 className='font-bold text-5xl'>Job Category List</h3>
            <p className='text-color py-10 md:px-0 px-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='my-container flex flex-col md:flex-row justify-between md:gap-10 gap-3 '>

                {
                    category.map(data => <CategoryCard data={data} key={data.id}></CategoryCard>)
                }
            </div>
        </div>
    )}

export default CategoryList;