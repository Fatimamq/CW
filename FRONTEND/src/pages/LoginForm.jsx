import React, { useState } from 'react';

export default function LoginForm({ onLogin, onSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can implement your login logic, for simplicity let's just alert the entered username and password
    alert(`Logging in with username: ${username} and password: ${password}`);
    // You can also call the onLogin function here and pass the username and password
    // onLogin(username, password);
  };

  const handleSignUp = () => {
    // Here you can implement your sign up logic, for simplicity let's just alert the entered username and password
    alert(`Signing up with username: ${username} and password: ${password}`);
    // You can also call the onSignUp function here and pass the username and password
    // onSignUp(username, password);
  };

  return (
    <div className="min-h-screen w-full bg-gray-200 absolute flex flex-col justify-center ">
      <div className="mx-auto w-full max-w-md">
        <h2 className="text-center text-3xl font-serif font-bold text-[#007f18]">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-[2rem] sm:px-10 border-[#007f18] border-2">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={" "+username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="shadow-md focus:ring-[#007f18] focus:border-[#007f18] block w-full sm:text-sm  rounded-md h-[30px] "
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow-md focus:ring-[#007f18] focus:border-[#007f18] block w-full sm:text-sm border-gray-300 rounded-md h-[30px]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <button
                  type="button"
                  onClick={handleSignUp}
                  className="font-medium text-[#007f18] hover:text-[#007f18] underline"
                >
                  New here? Sign Up
                </button>
              </div>
            </div>

            <div className='items-center'>
              <button
                type="button"
                onClick={handleLogin}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-[#007f18] hover:bg-[#007f18] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007f18]"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

