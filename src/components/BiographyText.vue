    <template id="biography-text">
      <div class="biography-text">
            <!-- <b-form-textarea id="textarea" v-model="biography" placeholder="Escribe tu biografía aquí" rows="8"></b-form-textarea> -->
           <!--  <button class="btnbio" @click="addBiography">Añadir</button> -->
           <p id="textBio"><em>{{ biography }}</em></p>
      </div>
    </template>

    <script>
        export default {
            name: "BiographyText",
            template: "#biography-text",
            data() {
                return {
                    biography: ""
                };
            },
             mounted() {
                    this.biography = this.$store.getters.getBio;
                },
            methods: {
            }
        }
    </script>
    <style>
.biography-text {
    height: 220px;
    width: 305px;
    padding: 20px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    border: 1px solid #3332;
    border-radius: 10px;
    background: none;
}
/* .btnbio {
    width: 100px;
    position: relative;
    align-self: flex-end;
    right: 90px;
    margin-top: 10px;
} */
    </style>