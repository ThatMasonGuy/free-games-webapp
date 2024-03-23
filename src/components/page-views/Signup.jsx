import React from 'react'
import { SignupForm } from '../ui/signup-form.tsx'
import ModeToggle from '../ui/mode-toggle.jsx'

const Signup = () => {
    return (
        <div>
          <ModeToggle />
            <h1>Sign up Page!</h1>
          <SignupForm />
        </div>
    );
};

export default Signup;