import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg bg-white">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-900 text-white p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">Welcome to Bahaa</h1>
            <p className="text-gray-300">
              Join us and experience secure, fast, and reliable services.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
         
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Sign In</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
          <p className="text-gray-600 mt-6 text-center">
            Don't have an account?{" "}
            <Link to={'/signup'} className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login