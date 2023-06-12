import axios from 'axios';

class IdeasAPi {
  constructor() {
    this._apiURL = 'http://localhost:5005/api/ideas';
  }

  //using axios
  getIdeas() {
    return axios.get(this._apiURL);
  }

  createIdea(data) {
    //post request
    return axios.post(this._apiURL, data);
  }
}

export default new IdeasAPi();
