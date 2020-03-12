    <template id="profile-header">
      <div class="profile-header">
        <div class="user">
          <img class="avatar" v-bind:src=user.image alt="avatar"> 
          <h2 class="nickname">{{ this.$route.params.nickname }}</h2>
          <div class="cumple">
            <p> Cumpleaños: &nbsp;</p>
            <p> {{ user.birth_date }}</p>
          </div>
          <biography-text></biography-text>
        </div>
      </div>
    </template>

    <script>
        import BiographyText from "../components/BiographyText"
        export default {
            name: "ProfileHeader",
            template: "#profile-header",
            components: {
              "biography-text": BiographyText
            },
            data() {
                return {
                  user:{
                    biography: "",
                    birth_date: "",
                    id: "",
                    image: "",
                    nickname: "",
                    password: "",
                  }
                };
            },
            mounted() {  
              this.user  = {...this.user, ...this.$store.getters.getUser};

            },
            watch: {
              '$route' (to, from){
                this.user = {};
                this.user  = {...this.user, ...this.$store.getters.getUser};
                console.log("funcion watch",  {...this.user});
              }
            }
        }
        
    </script>
    <style>

.user {
  width: 400px;
  height: 670px;
  border: 1px solid #3332;
  border-radius: 10px;
  background-color: #fff5;
  margin: 50px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.avatar {
  width: 250px;
  height: 250px;
}

.nickname {
  margin-top: 20px;

}

.cumple {
  display: flex;
  flex-direction: row;
}
    </style>