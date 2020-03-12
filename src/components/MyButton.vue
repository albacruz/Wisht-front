    <template id="my-button">
      <div class="my-button">
          <button class="button" v-on:click.prevent="onClick()">{{ text }}</button>
      </div>
    </template>

    <script>
        export default {
            name: "MyButton",
            template: "#my-button",
            props: ["onClick", "text"],
        }
    </script>
    <style>
.my-button {
  display: flex;
  justify-content: center;
  position: relative;
  top: 20px;
}

 .button {
  background-color: #fff9;
  border: none;
  color: #333;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 7px;
  width: 350px;
  height: 50px;
}

    </style>