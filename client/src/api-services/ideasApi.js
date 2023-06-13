import axios from 'axios';

class IdeasAPi {
  constructor() {
    this._apiURL = '/api/ideas';
  }

  //using axios
  getIdeas() {
    return axios.get(this._apiURL);
  }

  createIdea(data) {
    //post request
    return axios.post(this._apiURL, data);
  }

  updateIdea(id, data) {
    return axios.put(`${this._apiURL}/${id}`, data);
  }

  deleteIdea(id) {
    //send username bc it has to match
    const username = localStorage.getItem('username')
      ? localStorage.getItem('username')
      : '';
    return axios.delete(`${this._apiURL}/${id}`, {
      data: { username },
    });
  }
}

export default new IdeasAPi();
