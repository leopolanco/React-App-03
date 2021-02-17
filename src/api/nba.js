import axios from 'axios'


export default axios.create({
  baseURL: 'https://free-nba.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': NBA_KEY
  }
})
