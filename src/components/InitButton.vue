    <template id="init-button">
      <div class="init-button">
          <button class="boton" v-on:click.prevent="onClick()">{{ text }}</button>
      </div>
    </template>

    <script>
        export default {
            name: "InitButton",
            template: "#init-button",
            props: ["onClick", "text"],
        }
    </script>
    <style>
.init-button {
  display: flex;
  justify-content: center;
  position: relative;
  top: 20px;
}

 .boton {
  border: 1px solid #3332;
  border-radius: 10px;
  background-color: #fff5;
  color: #333;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 7px;
  width: 200px;
  height: 50px;
}

    </style>