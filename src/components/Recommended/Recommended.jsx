import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY} from '../../Data'
import { Link } from 'react-router-dom'

const Recommended = ({categoryId}) => {
    const [apiData,setApiData] = useState([])

    const fetchData = async()=>{
        const related_video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=70&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(related_video_url).then(res=>res.json()).then(data=>setApiData(data.items))
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className="Recommended">
        {
            apiData.map((item,index)=>{
                return(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="Side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channeTitle}</p>
                <p>{item.statistics.viewCount}</p>
            </div>
        </Link>
                )
            })
        }
        
    </div>
  )
}

export default Recommended