import React from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({channel}) => {
  return (
    <div className="channel-card">
        <Link className="flex flex-col items-center justify-center w-full h-full" to={channel?.id.channelId ? `/channel/${channel?.id.channelId}` : ""}>
            <img src={channel?.snippet?.thumbnails.high.url} 
            className="rounded-full border-4 border-gray-300 border-solid mb-4 w-44 h-44" />
            <p className="mb-4">{channel?.snippet?.title}</p>
            {
                channel?.statistics?.subscriberCount && 
                <p>
                    {parseInt(channel?.statistics?.subscriberCount).toLocaleString("en-US")} Subscribers
                </p>
            }
        </Link>
    </div>
  )
}

export default ChannelCard;