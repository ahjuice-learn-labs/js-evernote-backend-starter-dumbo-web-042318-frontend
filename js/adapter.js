const Adapter = {
  baseUrl: "http://localhost:3000/api/v1/",
  getAllUsers: function getAllUsers() {
    return fetch(`${Adapter.baseUrl}users`)
      .then(resp => resp.json())
  }
}
