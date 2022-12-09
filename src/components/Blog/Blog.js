import React from 'react';


const Blog = () => {
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Answer These Question</h1>
            <div className='my-10'>
                <h1 className="text-3xl text-center bg-slate-200 font-bold">
                    What are the different ways to manage a state in a React application?
                </h1>
                <p>
                    We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState.If we need to increase the component responsibility we only need to update the code in the same component and not in three different places.
                </p>
            </div>
            <div className='my-10'>
                <h1 className="text-3xl text-center bg-slate-200 font-bold">
                    How does prototypical inheritance work?
                </h1>
                <p>
                    Prototyping is an experimental process where design teams implement ideas into tangible forms from paper to digital. Teams build prototypes of varying degrees of fidelity to capture design concepts and test on users. With prototypes, you can refine and validate your designs so your brand can release the right products
                </p>
            </div>
            <div className='my-10'>
                <h1 className="text-3xl text-center bg-slate-200 font-bold">
                    What is a unit test? Why should we write unit tests?
                </h1>
                <p>
                    A  unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.

                </p>
            </div>
            <div className='my-10'>
                <h1 className="text-3xl text-center bg-slate-200 font-bold">
                    React vs. Angular vs. Vue?
                </h1>
                <p>
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.

                    AngularJS is a JavaScript framework. It can be added to an HTML page with a script tag. AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.
                </p>
            </div>
        </div>
    );
};

export default Blog;