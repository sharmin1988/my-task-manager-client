import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PrimaryBtn from '../../components/PrimaryBtn';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    
    const handelSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        // const photoURL = form.photoURL.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user
                handelUpdateUserProfile(name,)
                // jwtAuthToken(user)
                console.log(user);
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handelUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => { })
    }

    return (
        <div className="min-h-screen lg:flex">
            <div className="hidden lg:block w-1/2">
                <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1672127387~exp=1672127987~hmac=281d83fa0d1631bb63980c97d4698a00f4fe52eed4dc29f0fea9057c8a915ddf" alt="" />
            </div>
            <div className="bg-white min-h-screen w-full mx-auto flex lg:w-1/2 flex-col justify-center items-center">
                <div className="">
                    <form onSubmit={handelSignUp}>
                        <div>
                            <span className="text-sm text-gray-900">Hello!!!!</span>
                            <h1 className="text-2xl lg:text-3xl font-bold text-sky-500">Sign Up to a new account</h1>
                        </div>

                        <div className="my-3">
                            <label className="block text-md mb-2" >Name</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="text" name="name" placeholder="name" required />
                        </div>

                        <div className="my-3">
                            <label className="block text-md mb-2" >Email</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email" />
                        </div>

                        <div className="mt-5">
                            <label className="block text-md mb-2" >Password</label>
                            <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
                        </div>

                        <div className="flex justify-between">
                            <span className="text-xs my-2 font-semibold text-red-700 ">{error}</span>
                        </div>
                        <div className='mb-4'>
                            <PrimaryBtn>Sign Up</PrimaryBtn>
                        </div>
                    </form>
                    
                </div>

                <p className=''> Already have an account? <Link to='/login'><span className='cursor-pointer text-sm text-blue-600 font-semibold'> Login</span></Link></p>
            </div>
        </div >
    );
};

export default SignUp;