import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomTitle } from "../hooks/useCustomTitle"
import { toast } from "react-toastify";
import { login } from "../Services";

export const Login = () => {
  // using useNavigate to access the navigate functionality
  const navigate = useNavigate();

  // creating email and password reference variables using useRef hook 
  const email = useRef();
  const password = useRef();

  // function to handle user login using the login function from authService for API call
  async function handleLogin(event) {
    event.preventDefault();
    const loginData = {
      // accessing ref values from login form
      email: email.current.value,
      password: password.current.value,
    };
    try{
      const data = await login(loginData);
      data.accessToken ? navigate('/products') : toast.error(data);
    }catch(error){
      toast.error(error.message,{position: "bottom-center",autoClose:3000})
    }

  };
  
  async function handleGuestLogin() {
    email.current.value = process.env.REACT_APP_GUEST_EMAIL;
    password.current.value = process.env.REACT_APP_GUEST_PASSWORD;

    const loginData = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(loginData)

    try{
      const data = await login(loginData);
      data.accessToken ? navigate('/products') : toast.error(data);
    }catch(error){
      toast.error(error.message,{position: "bottom-center",autoClose:3000})
    }

  };


  // setting custom title
  useCustomTitle("Login");

  return (
    <main>
      <section>
        <h1 className="text-center m-10 text-2xl text-black underline underline-offset-8 font-semibold dark:text-white" >Login</h1>
        <form onSubmit={handleLogin} className="mx-auto">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your email</label>
            <input ref={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" autoComplete="off" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm text-gray-900 dark:text-gray-300">Your password</label>
            <input ref={password} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          </div>
          <div className="flex flex-col items-start gap-3 mb-5">
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
          </div>
        </form>
        <button onClick={handleGuestLogin} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button>    
      </section>
    </main>
  )
}
