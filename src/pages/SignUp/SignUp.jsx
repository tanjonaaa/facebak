import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import axios from "axios";
function SignUp() {
        const [showPassword, setShowPassword] = useState(false);

        const handlePasswordVisibility = () => {
            setShowPassword(!showPassword);
        }

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/signup', formData)
            .then((response) => {
                // Handle success
                console.log(response.data);
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    };

    return(
        <>
            <section className="bg-rich-black dark:bg-hex">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="/#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-prussian-blue">
                        <img className="w-12 h-12 mr-2" src="/logo.avif" alt="logo"/>
                    </a>
                    <div className="w-full bg-hex rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-hex">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-picton-blue">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-picton-blue">Your email</label>
                                    <input type="email" value={formData.email} onChange={handleChange} name="email" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rich-black dark:focus:ring-blue-500 dark:focus:border-white" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-picton-blue">Password</label>
                                    <div style={{ position: 'relative' }}>
                                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rich-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                        <i onClick={handlePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>{showPassword ? <HiOutlineEye color="cerulean"/> : <HiOutlineEyeOff color="cerulean"/>}</i>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-picton-blue">Confirm password</label>
                                    <div style={{ position: 'relative' }}>
                                        <input type={showConfirmPassword ? "text" : "password"} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rich-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                        <i onClick={handleConfirmPasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>{showConfirmPassword ? <HiOutlineEye color="cerulean" /> : <HiOutlineEyeOff color="cerulean" />}</i>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-picton-blue">Your username</label>
                                    <input type="text" name="email" id="email" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rich-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="examplename" required=""/>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms"
                                               type="checkbox"
                                               className="w-4 h-4 border border-gray-300 rounded bg-rich-black focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-rich-black">I accept the <a className="font-medium text-rich-black hover:underline dark:text-rich-black" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <div className="bg-picton-blue rounded-lg border-none">
                                <button
                                    type="submit" onClick={handleSubmit}
                                    className="w-full bg-cerulean border-none rounded text-white font-bold py-2 px-4 border hover:scale-105"
                                >
                                    Create an account
                                </button>
                                </div>

                                <p className="text-sm font-light text-white dark:text-white">
                                    Already have an account? <a href="/#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default SignUp