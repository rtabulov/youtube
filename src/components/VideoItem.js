import React from 'react'
import './VideoItem.css'

export default function VideoItem({ video, setSelected }) {
  return (
    <div className="item video-item" onClick={() => setSelected(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}
