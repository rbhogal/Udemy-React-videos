import axios from 'axios';

const KEY = 'AIzaSyBmWzF_tro0_ZQmO2jbb7rpn93roGWDuPs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
