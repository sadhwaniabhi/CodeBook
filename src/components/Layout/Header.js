import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from "../../components/Sections/Search";
import logo from '../../assets/logo1.png';

export const Header = () => {
  // darkTheme
  const [ darkTheme, setDarkTheme ] = useState(JSON.parse(localStorage.getItem("darkTheme")) || false);
  // search bar
  const [isHidden, setIsHidden] = useState(true);

  
  // handling the darkTheme
  useEffect((() =>{
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    
    if(darkTheme){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }

  }),[darkTheme])



  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-gray-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
          </Link>
          <div className="flex items-center relative">
            <span onClick={() => setDarkTheme(!darkTheme)} className='cursor-pointer text-xl text-gray-700 dark:text-white mb-1 mr-5 bi bi-gear-wide-connected'></span>
            <span onClick={() => setIsHidden(!isHidden)} className='cursor-pointer text-xl text-gray-700 dark:text-white mb-1 mr-5 bi bi-search'></span>
            <Link to="/cart" className='text-gray-700 dark:text-white mb-1.5 mr-5'>
              <span className='cursor-pointer text-2xl bi bi-cart-fill relative'>
                <span className='text-white absolute -top-0.2 left-2.5 px-1 rounded-full text-sm bg-rose-500'>0</span>
              </span>
            </Link>
            <span className='cursor-pointer text-2xl text-gray-700 dark:text-white mb-1.5 bi bi-person-circle'></span>
          </div>
        </div>
      </nav>
      <div className={`${isHidden ? "hidden" : ""} mx-auto max-w-screen-xl px-2 my-7`}>
        <Search />
      </div>
    </header>
  )
}
