<template id="login-form">
      <div class="login-form">
        <h1>Inicia Sesión</h1>
        <b-alert v-model="showAlert" variant="danger" dismissible>Nombre de usuario o contraseña incorrecto</b-alert>
        <div class="form">
          <form action="" method="post">
              <label for="user">Nombre usuario * :</label>
              <input type="text" v-model="login.nickname" class="form-control" id="user" required="true" />
              <label for="usrpasswd">Contraseña * :</label>
              <input type="password" v-model="login.password" class="form-control" id="usrpasswd" required="true" />
            <br>
            <my-button :onClick="checkLogin" :text=textoI></my-button>
    
        </form>
        <div class="toRegister">
          <p>¿No tienes una cuenta?
            <router-link to="/register">
              Regístrate
            </router-link>
          </p>
        </div>
        </div>
     </div>
</template>

    <script>
        import MyButton from "./MyButton";
        export default {
            name: "Login",
            template: "#login-form",
            components: {
                'my-button': MyButton
            },
            data() {
              return {
                login: {
                  nickname: "",
                  password: "",
                },
                showAlert: false,
                textoI: "Inicia Sesión"
              };
            },
            methods: {
              showRedAlert(){
                this.showAlert=true;
              },
              async checkLogin() {
                const datosLogin = { ...this.login };
                const isOk = await this.$store.dispatch("checkLogin",  datosLogin);
                if(isOk){
                  this.$router.push({path:'/profile/' + datosLogin.nickname});
                }
                else{
                  this.showRedAlert();
                }
              }
            }
        }
    </script>
    <style>
.login-form {
  width: 400px;
  height: 90%;
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

.toRegister {
  position: relative;
  top: 30px;
  text-align: center;
}
/* input:valid{
  border: 1px solid #58dc8b;
} */

/* input:invalid{
  border: 1px solid darkred;
} */
</style>