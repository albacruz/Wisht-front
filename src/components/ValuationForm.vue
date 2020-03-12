    <template id="val-form">
      <div class="val-form">
         <h2 class="titulo">¿Cómo valorarías este regalo?</h2>
          <star-rating v-model="rating"></star-rating>
          <br>
          <div class="haveit">
            <h2>¿Lo tienes?</h2>
            <b-form-group>
                <b-form-radio v-model="haveItValue" name="some-radios" value="A">Sí</b-form-radio>
                <b-form-radio v-model="haveItValue" name="some-radios" value="B">No</b-form-radio>
            </b-form-group>
          </div>

          <div class="wantit">
            <h2>¿Te gustaría tenerlo?</h2>
            <b-form-group>
                <b-form-radio v-model="wantItValue" name="radios" value="A">Sí</b-form-radio>
                <b-form-radio v-model="wantItValue" name="radios" value="B">No</b-form-radio>
            </b-form-group>
          </div>
          
      </div>
    </template>

    <script>
        import StarRating from "vue-star-rating";
        export default {
            name: "ValuationForm",
            template: "#val-form",
            components: {
                StarRating,
            },
            data() {
                return {
                    rating: null,
                    haveItValue: "",
                    wantItValue: ""
                };
            }
        }
    </script>
    <style>
    
.val-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
}
h2{
    font-size: 25px;
}

.haveit {
    margin-top: 30px;
}

.wantit {
    margin-top: 10px;
}
    </style>