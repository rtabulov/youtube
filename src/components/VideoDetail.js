import React from 'react'

export default function VideoDetail({ video }) {
  if (!video) {
    return <div>loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui ember">
        <iframe
          style={{ width: '100%', height: '430px' }}
          title={video.snippet.title}
          src={videoSrc}
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}
