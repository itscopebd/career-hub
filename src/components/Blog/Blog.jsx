import React from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Blog = (props) => {
    
    console.log(props)
    return (
        <>
        <Breadcrumbs title={props}></Breadcrumbs>
        <div className='my-container my-10'>
            <h3 className='text-3xl my-3'>When should you use context API?</h3>
            <p> <span className='font-bold'>Ans:</span> When any data is to be passed from one component to the other component. Then the data can be sent directly to that specific component without passing through the component through the context API.</p>
            <h3 className='text-3xl my-3'>What is a custom hook?</h3>
            <p> <span className='font-bold'>Ans:</span> A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.
            Hooks are reusable functions.When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
            <h3 className='text-3xl my-3'>What is useRef?</h3>
            <p> <span className='font-bold'>Ans:</span>  A built-in React hook that accepts one argument as the initial value and returns a reference (aka ref).
            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            <h3 className='text-3xl my-3'>What is useMemo?</h3>
            <p> <span className='font-bold'>Ans:</span>  A function that returns a memoized value of a passed in resource-intensive function. The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.</p>
        </div>
        </>
    );
};

export default Blog;