    <template id="filter-present">
      <div class="filter-present">
          <div class="form">
            
            <form>
              <div class="grid-container">
                <div class="col">
                <div class="form-group">
                  <label for="name">Regalo: </label><br>
                  <input type="checkbox" id="cbox1" value="first_checkbox"> <label for="cbox1">Material</label>
                  <input type="checkbox" id="cbox2" value="second_checkbox"> <label for="cbox2">Experiencia</label>
                </div>

                <div class="form-group">
                  <label for="usrname">Color:</label><br>
                  <select class="selectPage">
                    <option id="op1"></option>
                    <option id="op1">{{ color1 }}</option>
                    <option id="op2">{{ color2 }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="birthdate">Precio:</label><br>
                  <div class="slider-wrapper">
                      <input type="range" min="0" max="2000" step="1">
                  </div>
      
              </div>
              <br>
              </div>
              <div class="col">
                <label for="usrname">Departamento:</label><br>
                  <select class="selectPage">
                    <option id="op1"></option>
                    <option id="op1">{{ category1 }}</option>
                    <option id="op2">{{ category2 }}</option>
                  </select>
      
              <div class="form-group">
                <label for="name">Ordenar por: </label><br>

                <div class="order">
                  <input type="checkbox" id="cbox1" value="first_checkbox"> <label for="cbox1">Novedades</label>
                  <input type="checkbox" id="cbox2" value="second_checkbox"> <label for="cbox2">Más vendidos</label>
                  <input type="checkbox" id="cbox3" value="third_checkbox"> <label for="cbox3">Más recientes</label>
                
                      <input type="checkbox" id="cbox4" value="fourth_checkbox"> <label for="cbox4">Lo que sea</label>
                  <input type="checkbox" id="cbox5" value="fifth_checkbox"> <label for="cbox5">Lo que sea</label>
                </div>
              
                  
      
              </div>
      
              </div>
              <div class="col">
                <h3>Columna 3</h3>              
              </div>
              <div class="col">
                <h3>Columna 4</h3>                
              </div>
              <div class="col">
                <h3>COlumna 5</h3>
              </div>
              </div>
            </form>
              </div>
        </div>
    </template>

    <script>
        import MyButton from "../components/MyButton";
        export default {
            name: "FilterPresent",
            template: "#filter-present",
            components: {
              'my-button': MyButton
            },
            data() {
              return {
                color1 : 'Rosa',
                color2: 'Azul',
                category1: 'Ciencia Ficción',
                category2: 'Moda'
              };
            }
        }
    </script>
    <style>
    
.filter-present {
  width: 90vw;
  height: 250px;
  border: 1px solid #3332;
  border-radius: 10px;
  background-color: #fff5;
  margin: 20px auto;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ". .";
}

.col {
  width: 18vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
} 


.column{
  width: 9vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

}

.form-group {
  margin-top: 20px;
}


    </style>