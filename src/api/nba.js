import axios from 'axios'
const NBA_KEY = '1'
//this variable changes in prod

export default axios.create({
  baseURL: 'https://free-nba.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': NBA_KEY
  }
})
