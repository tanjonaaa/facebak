import React from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const ConfirmPasswordInput = ({ value, onChange, showConfirmPassword, handleConfirmPasswordVisibility, error }) => {
    return (
        <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                Confirm password
            </label>
            <div style={{ position: 'relative' }}>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    id="confirm-password"
                    name="confirmPassword"
                    className={`bg-white border ${error ? 'border-red-500' : 'border-gray-300'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                    placeholder="••••••••"
                    required=""
                />
                <i
                    onClick={handleConfirmPasswordVisibility}
                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                >
                    {showConfirmPassword ? <HiOutlineEye color="cerulean" /> : <HiOutlineEyeOff color="cerulean" />}
                </i>
            </div>
            {error && <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>}
        </div>
    );
};

export default ConfirmPasswordInput;
