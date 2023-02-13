import "./css/style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/videos/videoSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { toggleMode } from "../../redux/darkMode/darkMode";

const Navbar = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Submit Search Form
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  }
  // Change Category Tabs
  const handleClick = (e) => {
    dispatch(changeCategory("New"))
  }
  // Toggle Mode
  const handleMode = () => {
    dispatch(toggleMode())
  }
  return (
    <nav className="fixed px-5 py-3 flex justify-between items-center w-full bg-white dark:bg-bg-color">
      {/* Logo Section */}
      <div className="logo flex justify-between items-center">
        <GiHamburgerMenu className="cursor-pointer text-2xl text-black dark:text-white mr-6 hidden sm:block"/>
        <Link to="/" onClick={handleClick}>
          <div className="flex justify-between items-center cursor-pointer text-black dark:text-white">
            <FaYoutube className="text-red-700 mr-1 text-2xl"/>
            <p className="mr-1 hidden sm:block">YouTube</p>
            <sup className="hidden sm:block"><small>EG</small></sup>
          </div>
        </Link>
      </div>
      {/* Form Section */}
      <form className="w-full sm:w-1/2 sm:mr-0 flex" onSubmit={handleSubmit}>
        <div className="flex items-center mr-2 border-2 border-solid 
        border-aside-light dark:border-border-form rounded-full w-full">
          <input onChange={(e) => setSearchTerm(e.target.value)}
          type="search" placeholder="Search" className="bg-white dark:bg-input 
          text-black dark:text-white px-4 py-1.5 outline-none rounded-l-full border-r-2 border-solid 
          border-aside-light dark:border-border-form w-full caret-black dark:caret-white"/>
          <div onClick={handleSubmit}
           className="h-full px-2 bg-search-light dark:bg-search cursor-pointer rounded-r-full flex items-center">
            <AiOutlineSearch className="text-black dark:text-white text-xl"/>
          </div>
        </div>
        <div className="hidden sm:flex bg-search-light dark:bg-dark1 text-black dark:text-white items-center rounded-full px-2.5 cursor-pointer">
          <BiMicrophone className="text-xl"/>
        </div>
      </form>
      {/* Dark Mode Section */}
      <div>
        <div className={`toggle bg-light-mode dark:bg-dark-mode rounded-3xl cursor-pointer relative ${darkMode ? "" : "light"}`} 
        onClick={handleMode}>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;