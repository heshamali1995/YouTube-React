import { useEffect } from "react";
import Video from "../Video/Video";
import ChannelCard from "../ChannelCard/ChannelCard";
import "./css/style.css";
import Tabs from '../Tabs/Tabs';
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/videos/videoSlice";
import Spinner from "../Spinner/Spinner";

const Videos = () => {
  const category = useSelector((state) => state.data.selectedCategory);
  const videos = useSelector((state) => state.data.videos);
  const loading = useSelector((state) => state.data.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(`search?part=snippet&q=${category}&regionCode=US`))
  }, [category]);
  return (
    <section className="videos overflow-hidden bg-white dark:bg-bg-color ml-0">
        <Tabs />
        {
          loading ? (
            <Spinner />
          ) : (
            <div className="videos-container mt-14 px-5 py-7 text-black dark:text-white grid 
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6">
              {
                videos?.items?.map((item, index) => {
                  return (
                    item.id.channelId ? <ChannelCard channel={item} key={index} /> :
                      <Video video={item} key={index} />
                  )
                })
              }
            </div>
          )
        }
    </section>
  )
}

export default Videos;