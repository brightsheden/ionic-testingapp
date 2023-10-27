import React from 'react';

import { IonIcon } from '@ionic/react';
import { keyOutline, mailOutline } from 'ionicons/icons';

function Login() {
  return (
    <div className="relative h-screen flex justify-center items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3756858/pexels-photo-3756858.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          backgroundSize: 'cover',
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-white font-semibold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <div className="relative ">
              <label htmlFor="email" className="block text-white">Email</label>
             
              <input
                type="email"
                id="email"
                name="email"
                className="form-input mt-1 block w-full border rounded-full text-white border-white placeholder-gray-500 placeholder-white bg-transparent focus:border-white pl-10"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="relative">
              <label htmlFor="password" className="block text-white">Password</label>
            
              <input
                type="password"
                id="password"
                name="password"
                className="form-input mt-1 block w-full border rounded-full border-white placeholder-gray-500 placeholder-white bg-transparent focus:border-white pl-10"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="mb-6">
            <a href="#" className="text-white text-sm">Forgot Password?</a>
          </div>
          <div>
            <button type="submit" className="bg-blue-500 shadow text-white py-2 px-4 rounded-full w-full hover:bg-blue-600">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
