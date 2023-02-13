import "./css/style.css";
import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";
import { useSelector } from "react-redux";

const Aside = () => {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const mainLinks = [
        {
            icon: <MdHomeFilled className="text-xl" />,
            name: "Home",
        },
        {
            icon: <FaRegCompass className="text-xl" />,
            name: "Explore",
        },
        {
            icon: <MdOutlineSlowMotionVideo className="text-xl" />,
            name: "Shorts",
        },
        {
            icon: <MdSubscriptions className="text-xl" />,
            name: "Subscriptions",
        },
    ];
    const secondaryLinks = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl" />,
            name: "Library",
        },
        {
            icon: <MdHistory className="text-xl" />,
            name: "History",
        },
        {
            icon: <MdOutlineSmartDisplay className="text-xl" />,
            name: "Your Videos",
        },
        {
            icon: <MdOutlineWatchLater className="text-xl" />,
            name: "Watch Later",
        },
        {
            icon: <MdThumbUpOffAlt className="text-xl" />,
            name: "Liked Videos",
        },
    ];

    const subscriptionLinks = [
        {
            icon: <TbMusic className="text-xl" />,
            name: "Music",
        },
        {
            icon: <MdOutlineSportsVolleyball className="text-xl" />,
            name: "Sport",
        },
        {
            icon: <TbDeviceGamepad2 className="text-xl" />,
            name: "Gaming",
        },
        {
            icon: <GiFilmStrip className="text-xl" />,
            name: "Films",
        },
    ];

    const helpLinks = [
        {
            icon: <MdSettings className="text-xl" />,
            name: "Settings",
        },
        {
            icon: <MdOutlinedFlag className="text-xl" />,
            name: "Report history",
        },
        {
            icon: <MdOutlineHelpOutline className="text-xl" />,
            name: "Help",
        },
        {
            icon: <MdOutlineFeedback className="text-xl" />,
            name: "Send feedback",
        },
    ];
  return (
    <aside className={`text-black dark:text-white px-5 py-3 fixed w-1/5 h-full overflow-y-scroll bg-white dark:bg-bg-color 
    hidden sm:block ${darkMode ? "dark" : ""}`}>
        <div className="main-links">
            {
                mainLinks.map((elem) => {
                    return (
                        <div key={Math.random() * 100} className="flex sm:flex-col lg:flex-row sm:text-xs
                         md:text-sm xl:text-base items-center w-full mb-3 px-3 py-2.5 rounded-2xl cursor-pointer">
                            <span className="sm:mr-0 lg:mr-4">{elem.icon}</span>
                            <p className="text-center">{elem.name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr className="mb-3"/>
        <div className="secondry-links">
            {
                secondaryLinks.map((elem) => {
                    return (
                        <div key={Math.random() * 100} className="flex sm:flex-col lg:flex-row sm:text-xs
                        md:text-sm xl:text-base items-center w-full mb-3 px-3 py-2.5 rounded-2xl cursor-pointer">
                            <span className="sm:mr-0 lg:mr-4">{elem.icon}</span>
                            <p className="text-center">{elem.name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr className="mb-3"/>
        <div className="sub-links">
            {
                subscriptionLinks.map((elem) => {
                    return (
                        <div key={Math.random() * 100} className="flex sm:flex-col lg:flex-row sm:text-xs
                        md:text-sm xl:text-base items-center w-full mb-3 px-3 py-2.5 rounded-2xl cursor-pointer">
                            <span className="sm:mr-0 lg:mr-4">{elem.icon}</span>
                            <p className="text-center">{elem.name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr className="mb-3"/>
        <div className="help-link mb-16">
            {
                helpLinks.map((elem) => {
                    return (
                        <div key={Math.random() * 100} className="flex sm:flex-col lg:flex-row sm:text-xs
                        md:text-sm xl:text-base items-center w-full mb-3 px-3 py-2.5 rounded-2xl cursor-pointer">
                            <span className="sm:mr-0 lg:mr-4">{elem.icon}</span>
                            <p className="text-center">{elem.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </aside>
  )
}

export default Aside;