const Adapter = {
  baseUrl: "http://localhost:3000/api/v1/",
  getUsers: function getUsers() {
    return fetch(`${Adapter.baseUrl}users`)
      .then(resp => resp.json())
  },

  getUser: function getUser(id){
    return fetch(`${Adapter.baseUrl}users/${id}`)
      .then(resp => resp.json())
  }



}
