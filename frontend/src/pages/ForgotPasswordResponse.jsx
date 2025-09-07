import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordResponse = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Reset your password</h1>
                <p className="text-gray-600 mb-6">
                    Email sent <span className="text-green-500">✅</span> Check your email and reset your password.
                </p>
                <button
                    onClick={() => navigate('/home')}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default ForgotPasswordResponse;
