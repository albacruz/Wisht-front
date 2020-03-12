    <template id="add-tag">
      <div class="add-tag">
          <input type="text" v-model="tagName" class="tagInput" id="name" name="name" pattern = "^[A-Za-z0-9_]{1,15}$" minlength="2" maxlength="15">
          <b-col lg="4" class="pb-2"><b-button @click="addWord" size="sm">Añadir Tag</b-button></b-col>
          <!-- <button class="btn" @click="addWord">Añadir tag</button> -->
      </div>
    </template>

    <script>
        export default {
            name: "AddTag",
            template: "#add-tag",
            data() {
              return {
                tagName: ""
              };
            },
            methods: {
              addWord() {
                this.$emit("sendCloudWord", this.tagName);
                this.tagName = "";
              }
            }
        }
    </script>
    <style>
.add-tag {
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
}

.tagInput {
  border-radius: 5px;
  border: none;
  background-color: #fffa;
  width: 150px;
}

.btn {
  margin-left: 10px;
}/* 
input:valid{
  border: 1px solid #58dc8b;
}

input:invalid{
  border: 1px solid darkred;
} */

    </style>