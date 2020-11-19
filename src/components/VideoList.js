import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({ videos, setSelected }) {
  const renderedList = () =>
    videos.map((v) => {
      return (
        <VideoItem
          setSelected={setSelected}
          key={JSON.stringify(v.id)}
          video={v}
        />
      )
    })

  return <div className="ui relaxed divided list">{renderedList()}</div>
}
