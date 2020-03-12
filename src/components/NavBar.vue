<template id="nav-bar">
    <div class="nav-bar">
        <b-navbar id="naviBar" toggleable="lg" type="light" variant="dark">
          <b-navbar-brand href="#"> <img class="navLogo" src="../assets/img/wishitforme.png" alt="logo" /></b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form class="searcher">
                <auto-complete class="searcher" :items="users"
      filterby="nickname"
      @change="onChange"
      title="Look for a user"
      @selected="userSelected"/>
              </b-nav-form>

              <b-nav-item-dropdown class="drop" right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>Perfil</em></template>
                <!-- <b-dropdown-item>Profile</b-dropdown-item> -->
                <b-dropdown-item @click=changeRoute>Cerrar sesión</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
  </b-navbar>
    </div>
    
</template>

<script>
import Autocomplete from "../components/Autocomplete";
        export default{
            name: "NavBar",
            template: "#nav-bar",
            components: {
                "auto-complete": Autocomplete
            },
            data() {
                return {
                    users: []
                };
            },
            async mounted (){
                await this.$store.dispatch("getNicknames");
                this.getUsersData();
            },
            methods: {
                userSelected(user) {
                  console.log("user en navbar", user);
                  //console.log(`user Selected:\nid: ${user.id}\nnickname: ${user.nickname}\nbirth_date: ${user.birth_date}\nbiography: ${user.biography}\nimage: ${user.image}`);
                  this.$store.dispatch("setDataUser", user);
                  this.$router.push({path: '/profile/' + user.nickname});

                },
                onChange(value) {
                    console.log("este es el value", value);
                    //this.$router.push({path:'/profile/Boal27'});
                },
                getUsersData(){
                    this.users = this.$store.getters.getUsersNicknames;
                    console.log("estos son los users", {...this.users});
                },
                changeRoute() {
                  this.$router.push({path: '/login'});
                }
            }
        }
</script>

<style>
.navLogo {
  width: 180px;
  height: 50px
}

#naviBar {
  background-color: #fff5 !important;
}
.searcher {
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid lightgray;
    box-shadow: 0 0 10px #eceaea;
}

.drop {
  width: 160px;
  text-align: center;
  height: 40px;
  border-radius: 10px;
  border: 2px solid lightgray;
  box-shadow: 0 0 10px #eceaea;
  margin-left: 10px;
  
}


</style>
