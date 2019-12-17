import axios from 'axios'

const KEY = 'AIzaSyBZN1cjnk0gPeVpkm2jwHhYN7SiuwC-0Xw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
