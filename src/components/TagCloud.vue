    <template id="tag-cloud">
      <div class="tag-cloud">

        <vue-word-cloud name="nube" :words="words" :color="([, weight]) => weight >= 10 ? '#ea8c8f' : weight > 5 ? '#8de7bc' : weight > 3 ? '#6a6a6a': '#994a4c'" font-family="Roboto"/>
        <add-tag @sendCloudWord="addWord"></add-tag>
          
      </div>
    </template>

    <script>
    import VueWordCloud from "vuewordcloud";
    import AddTag from "./AddTag";
    import BiographyText from "./BiographyText";
        export default {
            name: "TagCloud",
            template: "#tag-cloud",
            components: {
                [VueWordCloud.name]: VueWordCloud,
                "add-tag": AddTag,
                "biography-text": BiographyText
            },
            data() {
              return {
                words: [],
                tag: "",
                tag_to_user: {
                  id_tag: "",
                  id_user: ""
                }
              };
            },
            mounted(){
              this.getTags();    
              
            },
            watch: {
              '$route' (to, from){
                this.words = [];
                this.tag_to_user.id_tag = "";
                this.tag_to_user.id_user = "";
                this.getTags();
              }
            },
            methods: {
              async addWord(tag) {
                this.tag = tag;
                this.words.push([tag, this.getRandomSize()]);
                await this.$store.dispatch("addTag", this.tag);
                this.tag_to_user.id_tag = this.$store.getters.getIdTag;
                this.tag_to_user.id_user = this.$store.getters.getId;
                await this.$store.dispatch("addTagToUser", {...this.tag_to_user});
                
              },
              getRandomSize(){
                return (Math.floor(Math.random()* 10) + 3);
              },
              async getTags(){
                const id = this.$store.getters.getId;
                await this.$store.dispatch("bringTags", id);
                const temp = this.$store.getters.getTags;
                console.log("Temp", temp.length);
                for(let i = 0; i<temp.length; i++){
                  console.log("tags molo", {...temp[i]}.tag);
                  let t = [{...temp[i]}.tag, this.getRandomSize()];
                  this.words.push(t);
                }
              }
            }
        }
    </script>
    <style>
   .tag-cloud {
    height: 80%;
    width: 63%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin: auto 50px;
    }
    </style>