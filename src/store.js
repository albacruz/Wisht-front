import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL = "http://localhost:3000";
const store = new Vuex.Store({
  state: {
    registro: {
      name: "",
      surname: "",
      nickname: "",
      biography: "",
      address: "",
      password: "",
      birth_date: "",
      email: ""
    },
    user: {
      biography: "",
      birth_date: "",
      id: "",
      image: "",
      nickname: "",
      password: ""
    },
    tagsArray: "",
    id_tag: "",
    usersNicknames: ""
  },
  mutations: {
    setValuesRegistro (state, values) {
      state.registro = { ...state.registro, ...values };
    },
    setTags (state, values) {
      state.tagsArray = values;
      console.log("estos son los values en mutations", state.tag);
    },
    setUserData (state, values) {
      state.user = { ...state.user, ...values };
      console.log("user mutation", { ...state.user });
    },
    addTag (state, value) {
      state.id_tag = value.id;
    },
    setUsersNicknames (state, values) {
      state.usersNicknames = values;
    }
  },
  actions: {
    async sendToDB ({ commit }, datos) {
      console.log("funcion sendtodb", datos);
      await axios.post(URL + "/users", datos)
        .then(function (response) {
          console.log(response);
          commit("setValuesRegistro", datos);
        })
        .catch(function (error) {
          console.log("Error: " + error);
        });
    },

    async checkLogin ({ commit }, datosLogin) {
      console.log("datos Login", datosLogin);
      let cosa;
      await axios.post(URL + "/login", datosLogin)
        .then(function (response) {
          cosa = response.data;
          const user = response.data.user;
          console.log("resultado", user);
          if (cosa.ok) {
            commit("setUserData", user);
          }
        })
        .catch(function (error) {
          console.log("Error: " + error);
        });
      return cosa.ok;
    },

    async addTag ({ commit }, value) {
      console.log("entro en addTag");
      await axios.post(URL + "/tags", { tag: value })
        .then(function (response) {
          console.log("response data", response.data.id);
          commit("addTag", response.data);
        })
        .catch(function (error) {
          console.log("Error: " + error);
        });
    },
    async addTagToUser ({ commit }, value) {
      console.log("entro en addTagToUser");
      await axios.post(URL + "/users/tags", value)
        .then(function (response) {
          console.log("response data", response);
          // commit("addTag", response.data);
        })
        .catch(function (error) {
          console.log("Error: " + error);
        });
    },
    async bringTags ({ commit }, id) {
      console.log("id", id);
      await axios.get(URL + "/users/" + id + "/prettytags")
        .then(function (response) {
          const tags = response.data;
          console.log("tags", tags);
          commit("setTags", tags);
        })
        .catch(function (error) {
          console.log("Error: " + error);
        });
    },
    async getNicknames ({ commit }) {
      await axios.get(URL + "/users")
        .then(function (response) {
          console.log("esta es la respuesta", response.data);
          commit("setUsersNicknames", response.data);
        })
        .catch(function (error) {
          console.log("Error: " + error);
        });
    },
    setDataUser ({ commit }, user) {
      console.log("datitos", user);
      commit("setUserData", user);
    }
  },

  getters: {
    getNickname (state) {
      return state.user.nickname;
    },
    getId (state) {
      return state.user.id;
    },
    getUser (state) {
      return state.user;
    },
    getTags (state) {
      // console.log("getter", state.tags);
      return state.tagsArray;
    },
    getIdTag (state) {
      return state.id_tag;
    },
    getUsersNicknames (state) {
      return state.usersNicknames;
    },
    getBio (state) {
      return state.user.biography;
    }
  }
});

export default store;
