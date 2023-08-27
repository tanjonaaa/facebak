import React from 'react';

const UsernameInput = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-picton-blue">
                Your username
            </label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                id="username"
                name="username"
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-rich-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="examplename"
                required=""
            />
        </div>
    );
};

export default UsernameInput;
