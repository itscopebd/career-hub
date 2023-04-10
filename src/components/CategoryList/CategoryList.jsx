import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryList = (props) => {

    const { category } = props;

    return (

        <div className='text-center pt-24'>
            <h3 className='font-bold text-5xl'>Job Category List</h3>
            <p className='text-color py-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='my-container flex justify-between gap-10'>

                {
                    category.map(data => <CategoryCard data={data} key={data.id}></CategoryCard>)
                }
            </div>
        </div>
    )}

export default CategoryList;