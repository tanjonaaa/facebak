import React from 'react';

const EmailInput = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
            </label>
            <input
                type="email"
                value={value}
                onChange={onChange}
                id="email"
                name="email"
                className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:border-primary-600
                block w-full p-2.5"
                placeholder="name@company.com"
                required=""
            />
        </div>
    );
};

export default EmailInput;
