import { createStore } from 'vuex'
const state = function () {
  return {
    usersData: []
  }
}
const getters = {
  getUsersData: (state) => {
    console.log('get users called', state.usersData)
    return state.usersData
  }
}
const mutations = {
  setUsersData: (state, payload) => state.usersData = payload,
}
const actions = {
  async fetchData({ commit }) {
    // const response = await fetch(config.GET_USERS_DATA)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const responseData = await response.json()
    console.log('response', response, ' ', responseData)
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const users = []
    for (let key in responseData) {
      const user = {
        id: key,
        name: responseData[key].name,
        username: responseData[key].username,
        email: responseData[key].email,
        phone: responseData[key].phone,
        website: responseData[key].website
      }
      users.push(user)
    }
    commit('setUsersData', users)
  }
}
const store = createStore({ state, getters, mutations, actions })
export default store