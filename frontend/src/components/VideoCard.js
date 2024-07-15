import React from 'react'
import Link from "next/link"
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle,demoChannelUrl, demoChannelTitle } from "../../utils/Constants";

const VideoCard = ({ video : { id: { videoId }, snippet} }) => (

  <Card sx={{ width: { xs: '100%', sm: '358px', md: "450px"}, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: 2, backgroundColor:"white"}}>

    <Link href={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
       sx={{ width: { xs: '100%', sm: '348px' , md:'450px'}, height:{ xs: '190px', sm: '358px' , md:'250px'} }} />
    </Link>

    <CardContent sx={{ backgroundColor: "white", height: '100px' }}>

      <Link href= {videoId ? `/video/${videoId}` : demoVideoUrl }>
        <Typography variant="subtitle1" fontWeight="bold" color="black">
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      
      <Link href= {snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>

        <Typography sx={{display:"flex",alignItems:"center"}} variant = "subtitle2" color = "black">
          {snippet?.channelTitle || demoChannelTitle}       
          <CheckCircleIcon sx ={{ fontSize: "14px" , color: "gray" , ml: "5px" }}/>
        </Typography>
      </Link>
    </CardContent> 

   </Card>
);

export default VideoCard