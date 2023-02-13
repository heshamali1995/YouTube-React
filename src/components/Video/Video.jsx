import { Link } from "react-router-dom";

const Video = ({video}) => {
  return (
    <div className="video cursor-pointer rounded-xl hover:bg-aside-light dark:hover:bg-aside">
        <Link to={video?.id?.videoId ? `/video/${video.id.videoId}` : ""}>
            <div className="video-img">
                <img className="w-full h-full rounded-t-xl" src={video.snippet.thumbnails.high.url} 
                alt={video.snippet.thumbnails.high.url} />
            </div>
            <div className="video-data flex p-3">
                <div>
                </div>
                <div>
                    <p className="text-sm mb-3">{video.snippet.description.slice(0, 60)}...</p>
                    <p className="text-gray-400 text-xs">{video.snippet.channelTitle}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Video;