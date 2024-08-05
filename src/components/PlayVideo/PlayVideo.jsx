import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import { API_KEY, convert } from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {

    const {videoId} = useParams()

    const [apiData,setApiData]= useState(null)
    const [channelData,setChannelData]=useState(null);
    const [commentData,setCommentData]= useState([])
    const fetchVideoData = async ()=>{
        const video_details= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(video_details).then(res=>res.json()).then(data=>setApiData(data.items[0]));
    }

    const fetchOtherData= async()=>{
        const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

        //fetching comment data
        const comment_data = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
        await fetch(comment_data).then(re=>re.json()).then(data=>setCommentData(data.items))
    }

    useEffect(()=>{
        fetchVideoData()
    },[videoId])
    useEffect(()=>{
        fetchOtherData()
    },[apiData])

  return (
    <div className="play-video">
        {/*<video src={Instagram} controls autoPlay muted></video>*/}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"title here"}</h3>
        <div className="play-video-info">
            <p>{apiData?apiData.statistics.viewCount:"16K"} views &bull; { apiData?moment(apiData.snippet.published).fromNow():""}</p>
            <div>
            <p><i class="fa-regular fa-thumbs-up"></i>{apiData?apiData.statistics.likeCount:""}</p>
            <p><i class="fa-regular fa-thumbs-down"></i></p>
            <p><i class="fa-solid fa-share"></i>share</p>
            <p><i class="fa-regular fa-floppy-disk"></i>save</p>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{channelData?channelData.statistics.subscriberCount:"124"} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="description">
            <p>{apiData?apiData.snippet.description.slice(0,250):"Description here"}</p>
            <hr />
            <h4>{apiData?apiData.statistics.commentCount:102} Comments</h4>

            {commentData.map((item,int)=>{
                 return(
                    <div key={int} className="Comments">
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1day ago</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-action">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <span>{item.snippet.topLevelComment.likeCount}</span>
                        <i class="fa-regular fa-thumbs-down"></i>
                        </div>
                    </div>
                    </div>
                )

            })}
        </div>
    </div>
  )
}

export default PlayVideo