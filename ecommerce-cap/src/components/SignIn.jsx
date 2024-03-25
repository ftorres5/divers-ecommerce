import { useState } from "react";
import { useUserLoginMutation } from "../state"
import { setToken } from "../state/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function SignIn() {
    const [ token, updateToken ] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userLogin, { data, isLoading, isError }] = useUserLoginMutation();
    

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await userLogin({ username, password }).unwrap();
        const userToken = response.token;
        dispatch(setToken(userToken));
        localStorage.setItem('token', userToken)
        console.log(userToken)
        console.log('Login successful!');
        navigate('/')
      } catch (error) {
        console.error('Login failed:', error);
      }
    };
  

    return (
      <>
      <body className="h-full">
        <div className="flex h-full flex-1">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full lg:w-96">
              <div>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
  
              <div className="mt-10">
                <div>
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          value={username}
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit" disabled={isLoading}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                      {isError && <div>Error logging in. Please try again.</div>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </body>
      </>
    )
  }
  