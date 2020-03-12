<template id="registro-form">
      <div class="registro-form">
        <h1>Regístrate</h1>
        <div class="form">
          <form>
            <br>
              <label for="name">Nombre Completo* :</label>
              <input v-model="registro.name" type="text" class="form-control" id="name" name="Name" required />
            <!-- <div class="form-group">
              <label for="name">Apellidos * :</label>
              <input v-model="registro.surname" type="text" class="form-control" id="name" name="Name" required />
            </div> -->
              <label for="usrname">Nombre de usuario * :</label>
              <input type="text" v-model="registro.nickname" class="form-control" id="usrname" name="Name" pattern="^[A-Za-z0-9_]{1,15}$" required />
              <label for="usremail">Email * :</label>
              <input v-model="registro.email" type="email" class="form-control" id="usremail" name="Email" pattern= "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required />
            
              <label for="usrname">Contraseña * :</label>
              <input type="password" v-model="registro.password" class="form-control" id="usrname" name="Name" required />
								<label for="birthdate">Fecha de nacimiento * :</label>
								<input v-model="registro.birth_date" class="date form-control" type="date" id ="birthdate" name ="Birth" required> <br>
              <!-- <label for="usrname">Dirección * :</label>
              <input type="text" v-model="registro.address" class="form-control" id="usrname" name="Name" placeholder="Vía, número, CP, municipio, provincia, país" required /><br> --> 
              <my-button :onClick="setValues" :text="textoR"></my-button>
        </form>
        <div class="toLogin">
          <p>¿Tienes una cuenta?
            <router-link to="/login">
              Inicia Sesión
            </router-link>
          </p>
        </div>
        </div>
     </div>
</template>

    <script>

        import MyButton from "./MyButton";
        import axios from "axios";
        export default {
            name: "Registro",
            template: "#registro-form",
            components: {
                'my-button': MyButton
            },
            data() {
              return {
                registro: {
                  name: "",
                  surname: "",
                  nickname: "",
                  biography: "",
                  address: "",
                  password: "",
                  birth_date: "",
                  email: ""
                },
                textoR: "Regístrate"
              };
            },
            methods: {

              async setValues() {
                const datos = {...this.registro};
                await this.$store.dispatch("sendToDB",  datos);
                this.$router.push({path:'/login'});
              }
            }
        }
    </script>
    <style>
.registro-form {
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  font-size: 17px;
}

.form {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
}

.form-control {
  width: 285px;
  height: 20px;
  border-radius: 5px;
  background-color: #fffa;
  margin-top: 10px;
  border: none;
}

.toLogin {
  position: relative;
  top: 25px;
  text-align: center;
}
/* input:valid{
  border: 1px solid #58dc8b;
} */

/* input:invalid{
  border: 1px solid darkred;
} */
</style>