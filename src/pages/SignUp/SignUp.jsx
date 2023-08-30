import React, { useState } from 'react';
import { createUser } from "../../utils/fetcher/users";
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import UsernameInput from './UsernameInput';
import {Link} from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });

    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "password" || name === "confirmPassword") {
            setPasswordMatchError(name === "confirmPassword" && value !== formData.password);
            setPasswordLengthError(value.length < 8);
        } else {
            setPasswordMatchError(false);
            setPasswordLengthError(false);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordMatchError) {
            setErrorMessage("Passwords do not match");
            setSuccessMessage("");
            return;
        }

        if (passwordLengthError) {
            setErrorMessage("Password must have at least 8 characters");
            setSuccessMessage("");
            return;
        }

        try {
            const response = await createUser(formData);
            if (response) {
                setSuccessMessage("User registered successfully");
                setErrorMessage("");
            } else {
                setErrorMessage("User registration failed");
                setSuccessMessage("");
            }
        } catch (error) {
            setErrorMessage("User is already registered");
            setSuccessMessage("");
        }
    };

    return (
        <section className="bg-hex flex items-center justify-center min-h-screen">
            <img src="/illustrations/Connected world-amico.svg"
                 className="w-1/3 ml-2"
                 alt="coucou" />
            <div className="w-2/5 flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <div className="w-full bg-hex rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-white dark:border-hex">
                    <div className="p-8 space-y-6">
                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-picton-blue">
                            Create an account
                        </h1>
                        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                            <EmailInput value={formData.email} onChange={handleChange} />
                            <PasswordInput
                                value={formData.password}
                                onChange={handleChange}
                                showPassword={showPassword}
                                handlePasswordVisibility={handlePasswordVisibility}
                            />
                            <ConfirmPasswordInput
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                showConfirmPassword={showConfirmPassword}
                                handleConfirmPasswordVisibility={handleConfirmPasswordVisibility}
                                error={passwordMatchError}
                            />
                            <UsernameInput value={formData.username} onChange={handleChange} />
                            <div className="bg-picton-blue rounded-lg border-none">
                                <button
                                    type="submit"
                                    className="w-full bg-cerulean border-none rounded text-white font-bold py-2 px-4 border hover:scale-105"
                                >
                                    Create an account
                                </button>
                            </div>
                            {successMessage && (
                                <p className="text-green-500">{successMessage}</p>
                            )}
                            {errorMessage && (
                                <p className="text-red-500">{errorMessage}</p>
                            )}
                            <p className="text-md font-light text-rich-black dark:text-rich-black">
                                Already have an account?&nbsp;
                                <Link to="/login"
                                      className="font-medium text-primary-600 hover:underline dark:text-picton-blue">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default SignUp;
