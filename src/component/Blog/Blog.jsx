import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl font-semibold mb-4'>When should I use context API?</h1>
                <p className='font-medium'>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context. </p>
            </div>
            <div className='text-center mt-10'>
                <h1 className='text-2xl font-semibold mb-4'>what is react custom hook?</h1>
                <p className='font-medium'>Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function.Custom Hooks allow us to access the React ecosystem in terms of hooks, which means we have access to all the known hooks like useState, useMemo, useEffect, etc </p>
            </div>
            <div className='text-center mt-10'>
                <h1 className='text-2xl font-semibold mb-4'>what is useRef</h1>
                <p className='font-medium'>The useRef hook returns a mutable object which doesn't re-render the component when it's changed.Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.</p>
            </div>
            <div className='text-center mt-10'>
                <h1 className='text-2xl font-semibold mb-4'>what is useMemo</h1>
                <p className='font-medium'>What is the use of useMemo?
                    The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.</p>
            </div>
        </div>
    );
};

export default Blog;