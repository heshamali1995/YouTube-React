import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchVideoDetails } from "../../redux/videoDetails/videoDetailsSlice";
import ReactPlayer from "react-player";
import { fetchData } from "../../redux/videos/videoSlice";
import Video from "../Video/Video";
import Spinner from "../Spinner/Spinner";

const VideoDetails = () => {
  const loading = useSelector((state) => state.data.loading);
  const videos = useSelector((state) => state.data.videos);
  const videoDetails = useSelector((state) => state.videoDetails.videoDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchVideoDetails(`videos?part=snippet,statistics&id=${id}`));
    dispatch(fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`))
  }, [id]);
  return (
    <section className="mt-16 text-black dark:text-white bg-white dark:bg-bg-color px-5 py-7 md:p-12 flex flex-col sm:flex-row">
      {
        loading ? (
          <Spinner />
        ) : (
          <>
              <div className="video-player w-full mb-6 sm:w-4/6">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player !w-full" controls/>
                <h3 className="mt-5 mb-5">{videoDetails?.items[0]?.snippet?.title}</h3>
                <div className="flex justify-between text-gray-400 text-sm">
                  <Link to={`/channel/${videoDetails?.items[0]?.snippet?.channelId}`}>
                    <p>{videoDetails?.items[0]?.snippet?.channelTitle}</p>
                  </Link>
                  <div className="flex">
                    <p className="mr-8">{parseInt(videoDetails?.items[0]?.statistics?.viewCount).toLocaleString("en-US")} Views</p>
                    <p>{parseInt(videoDetails?.items[0]?.statistics?.likeCount).toLocaleString("en-US")} Likes</p>
                  </div>
                </div>
              </div>
              <div className="videos-aside w-full sm:w-2/6 px-5 py-7 flex flex-col gap-5">
                {
                  videos?.items?.map((item, index) => {
                    return (
                      <Video video={item} key={index} />
                    )
                  })
                }
              </div>
          </>
        )
      }
    </section>
  )
}

export default VideoDetails;