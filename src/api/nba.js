import axios from 'axios'
export default axios.create({
  baseURL: 'https://free-nba.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_NBA_API_KEY
  }
})
