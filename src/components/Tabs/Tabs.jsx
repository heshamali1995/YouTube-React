import "./css/style.css";
import { useRef, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/videos/videoSlice";

const Tabs = () => {
  const category = useSelector((state) => state.data.selectedCategory);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const ref = useRef();
  const [right, setRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const tabsData = [
    {
      id: "1",
      name: "New"
    },
    {
      id: 2,
      name: "JS Mastery"
    },
    {
      id: "3",
      name: "Computer Science"
    },
    {
      id: "4",
      name: "Frontend Development"
    },
    {
      id: "5",
      name: "Football"
    },
    {
      id: "6",
      name: "Gaming"
    },
    {
      id: "7",
      name: "ReactJS"
    },
    {
      id: "8",
      name: "Tailwind"
    },
    {
      id: "9",
      name: "Redux"
    },
    {
      id: "10",
      name: "Backend Development"
    },
    {
      id: "11",
      name: "Fullstack Engineer"
    }
  ];
  // Scroll Right Function
  const scrollRight = () => {
    ref.current.scrollBy(100, 0);
    setShowLeft(true)
    if (ref.current.scrollLeft === (ref.current.scrollWidth - ref.current.clientWidth)) {
      setRight(true)
    }
  }
  // Scroll Left Function
  const scrollLeft = () => {
    ref.current.scrollBy(-100, 0);
    setRight(false);
    if (ref.current.scrollLeft === 0) {
      setShowLeft(false)
    }
  }
  return (
    <div className="tabs w-full sm:w-4/5 text-black dark:text-white px-5 py-3 fixed flex gap-4 items-center bg-white dark:bg-bg-color">
      <div className="left-arrow p-2 rounded-full relative cursor-pointer hover:bg-aside-light dark:hover:bg-aside hidden"
      style={{display: showLeft ? "block": "none"}} onClick={scrollLeft}>
        <MdArrowBackIosNew />
      </div>
      <div className="tabs-container flex overflow-hidden" ref={ref}>
        {
          tabsData.map((elem) => {
            return (
              <div onClick={() => dispatch(changeCategory(elem.name))} key={elem.id} 
              className={`tab py-1 px-4 rounded-lg cursor-pointer whitespace-nowrap mr-4 
              bg-aside-light dark:bg-aside ${elem.name === category ? "selected" : ""} 
              ${darkMode ? "dark" : ""}`}>
                <p>{elem.name}</p>
              </div>
            )
          })
        }
      </div>
      <div className="right-arrow p-2 rounded-full cursor-pointer hover:bg-aside-light dark:hover:bg-aside relative"
       onClick={scrollRight} style={{display: right ? "none" : "block"}}>
        <MdArrowForwardIos />
      </div>
    </div>
  )
}

export default Tabs;