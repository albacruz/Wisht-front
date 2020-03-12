    <template id="present-comp">
      <div class="present-comp">
           <b-card v-bind:title=data.name img-top tag="article" style="max-width: 20rem;" class="mb-2 giftCard">
            <img class="presentGif" v-bind:src=data.image alt="Present"> 
              <b-card-text class="center">{{data.description}}</b-card-text>
              <b-button class="boton" v-bind:href=data.link variant="outline-primary">Ve a la página</b-button>
          </b-card>
      </div>
    </template>

    <script>
        export default {
            name: "PresentComp",
            template: "#present-comp",
            props: ["data"],
            
        }
    </script>
    <style>
    
.present-comp {
  margin: 25px;
}

.giftCard {
  border: 1px solid #3332;
  border-radius: 10px;
  background-color: #fff5;
  display: flex;
  justify-content: center;
  width: 550px;
  height: 350px;
  
}

.presentGif {
  width: 150px;
  height: 150px;
}

.center {
  align-self: center;
}

    </style>