import axios from 'axios'

const key = process.env.REACT_APP_YOUTUBE_API_KEY

let youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: key,
  },
})

export { youtube }
