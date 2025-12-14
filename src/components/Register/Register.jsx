import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <form className='flex justify-center items-center h-screen' onSubmit={handleSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-2xl">Please Register</legend>

                <label className="label">Email</label>
                <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className="label">Password</label>
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit' className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </form>
    );
};

export default Register;