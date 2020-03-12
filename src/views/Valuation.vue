    <template id="valuation-view">
      <div class="valuation-view">
        <div class="regalo"><present-comp :data=data1></present-comp></div>
        <div class="formulario">
            <val-form></val-form>
        </div>
      </div>
    </template>

    <script>
        import PresentComp from "../components/PresentComp";
        import ValuationForm from "../components/ValuationForm";
        export default {
            name: "Valuation",
            template: "#valuation-view",
            components: {
                'present-comp': PresentComp,
                "val-form": ValuationForm,
            },
            data() {
                return {
                    data1: {
                        name: "Mr. Brainwash Rescue - Pink (2019) Screen Print",
                        link: "https://fancy.com/things/1948698658807483209/Mr.-Brainwash-%22Rescue---Pink%22-(2019)-Screen-Print?utm=rec",
                        image: "https://thefancy-media-ec4.thefancy.com/1280/20190512/1948698658807483209_18900b56a030.png", 
                  }
                };  
            }
        }
    </script>
    <style>
.valuation-view {
  width: 900px;
  height: 500px;
  border: 2% solid #3332;
  border-radius: 5%;
  background-color: #fff5;
  display: flex;
  margin: 50px auto;
  flex-direction: row;
}
.formulario {
    width: 400px;
    margin: auto;
}

.regalo {
    margin: auto;
    width: 350px;
}
    </style>