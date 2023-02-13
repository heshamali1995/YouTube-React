import Video from "../Video/Video";
import ChannelCard from "../ChannelCard/ChannelCard";
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/videos/videoSlice";

const SearchFeed = () => {
    const { searchTerm } = useParams();
    const videos = useSelector((state) => state.data.videos);
    const loading = useSelector((state) => state.data.loading);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchData(`search?part=snippet&q=${searchTerm}`))
    }, [searchTerm]);
    return (
        <section className="channel-details mt-16 text-black dark:text-white px-5 py-7 bg-white dark:bg-bg-color">
          <div className="header text-lg">
            Search Results For <span className="text-red-500">{searchTerm}</span>
          </div>
          {
            loading ? (
              <Spinner />
            ) : (
              <div className="videos-container mt-14 text-black dark:text-white grid 
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
export default SearchFeed;