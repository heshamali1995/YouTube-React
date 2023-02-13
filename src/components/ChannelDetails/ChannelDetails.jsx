import Video from "../Video/Video";
import ChannelCard from "../ChannelCard/ChannelCard";
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../../redux/channelDetails/channelDetails";
import { fetchData } from "../../redux/videos/videoSlice";

const ChannelDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const channelDetails = useSelector((state) => state.channelDetails.channelDetails);
    const channelVideos = useSelector((state) => state.data.videos);
    const loading = useSelector((state) => state.data.loading);
    useEffect(() => {
        dispatch(fetchDetails(`channels?part=snippet&id=${id}`));
        dispatch(fetchData(`search?channelId=${id}&part=snippet&order=date`));
    }, [id]);
    return (
        <section className="channel-details bg-white dark:bg-bg-color mt-16 text-black dark:text-white px-5 py-7">
            {
                loading ? (
                    <Spinner/>
                ) : (
                    <>
                        <div className="flex justify-between gap-14 md:gap-20 mb-16 flex-col md:flex-row">
                            <ChannelCard channel={channelDetails?.items[0]} className="text-black dark:text-white w-full h-full"/>
                            <div className="background rounded-3xl h-48 w-full md:w-2/3" style={{ 
                                backgroundImage: `url(${channelDetails?.items[0]?.brandingSettings.image.bannerExternalUrl})`,
                                backgroundSize: "100% 100%",
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat"
                                }}>
                            </div>
                        </div>
                        <div className="channel-videos grid 
                            grid-cols-1
                            sm:grid-cols-2
                            md:grid-cols-3
                            lg:grid-cols-4
                            gap-6">
                            {
                                channelVideos?.items?.map((item, index) => {
                                    return (
                                        <Video video={item} key={index}/>
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
export default ChannelDetails;