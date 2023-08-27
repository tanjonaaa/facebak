import React from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const PasswordInput = ({ value, onChange, showPassword, handlePasswordVisibility }) => {
    return (
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-picton-blue">
                Password
            </label>
            <div style={{ position: 'relative' }}>
                <input
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    id="password"
                    name="password"
                    className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rich-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                    required=""
                />
                <i
                    onClick={handlePasswordVisibility}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                >
                    {showPassword ? <HiOutlineEye color="cerulean" /> : <HiOutlineEyeOff color="cerulean" />}
                </i>
            </div>
        </div>
    );
};

export default PasswordInput;
