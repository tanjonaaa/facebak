import React, { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

function SignUp() {
        const [showPassword, setShowPassword] = useState(false);

        const handlePasswordVisibility = () => {
            setShowPassword(!showPassword);
        }

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return(
        <>
            <section className="bg-rich-black dark:bg-prussian-blue">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="/#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-prussian-blue">
                        <img className="w-12 h-12 mr-2" src="/logo1.png" alt="logo"/>
                    </a>
                    <div className="w-full bg-rich-black rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-rich-black dark:borderprussian-blue">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-rich-black border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div style={{ position: 'relative' }}>
                                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-rich-black border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                        <i onClick={handlePasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>{showPassword ? <HiOutlineEye color="white"/> : <HiOutlineEyeOff color="white"/>}</i>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <div style={{ position: 'relative' }}>
                                        <input type={showConfirmPassword ? "text" : "password"} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-rich-black border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                        <i onClick={handleConfirmPasswordVisibility} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>{showConfirmPassword ? <HiOutlineEye color="white" /> : <HiOutlineEyeOff color="white" />}</i>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                    <input type="text" name="email" id="email" className="bg-rich-black border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="examplename" required=""/>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-rich-black focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-white">I accept the <a className="font-medium text-white hover:underline dark:text-white" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-prussian-blue focus:ring-4 focus:outline-none focus:bg-prussian-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prussian-blue dark:focus:bg-prussian-blue">Create an account</button>

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