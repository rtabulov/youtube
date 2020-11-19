import { debounce } from 'lodash'
import React, { useState, useEffect } from 'react'
import { youtube } from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

export default function App() {
  const [videos, setVideos] = useState([])
  const [selected, setSelected] = useState(null)

  const onTermSubmit = debounce(async (term) => {
    const res = await youtube.get('/search', {
      params: {
        q: term,
      },
    })

    setVideos(() => res.data.items)
    setSelected(() => res.data.items[0])
  }, 400)

  useEffect(() => {
    onTermSubmit('miles morales ps5')
  }, [onTermSubmit])

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selected} />
          </div>

          <div className="five wide column">
            <VideoList setSelected={setSelected} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}
