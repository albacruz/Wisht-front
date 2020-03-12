    <template id="autocomplete-view">
      <div class="autocomplete-view">
        <auto-complete :items="users"
      filterby="nickname"
      @change="onChange"
      title="Look for a user"
      @selected="userSelected"/>
      </div>
    </template>

    <script>
        import Autocomplete from "../components/Autocomplete";
        export default{
            name: "AutocompleteView",
            template: "#autocomplete-view",
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
                    console.log(`user Selected:\nid: ${user.id}\nnickname: ${user.nickname}\nbirth_date: ${user.birth_date}\nbiography: ${user.biography}`);
                },
                onChange(value) {
                    console.log("este es el value", value);
                    //this.$router.push({path:'/profile/Boal27'});
                },
                getUsersData(){
                    this.users = this.$store.getters.getUsersNicknames;
                    console.log("estos son los users", {...this.users});
                }
            }
        }
    </script>
    <style>

    .autocomplete-view {
        margin: 0px auto;
        margin-top: 60px;
        width: 400px;
    }

    </style>