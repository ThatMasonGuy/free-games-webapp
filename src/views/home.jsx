import React from 'react';
import ModeToggle from '@components/ModeToggle'; // Assuming Button.js is in the same directory

const MyComponent = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };


    return (
        <div>
            <h1>Welcome to the Free Games Web App!</h1>
            <ModeToggle onClick={handleClick} />
        </div>
    );
};

export default MyComponent;
