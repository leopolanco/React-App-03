import axios from 'axios'
const NBA_API_KEY = process.env.NBA_API_KEY
//this variable changes in prod

export default axios.create({
  baseURL: 'https://free-nba.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': NBA_API_KEY
  }
})
