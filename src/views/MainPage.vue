    <template id="main-page">
      <div class="main-page">
          <h1>Hacer un regalo nunca fue tan fácil</h1>
          <div class="image">
               <img id="present" src="../assets/img/giftcrop.gif" alt="present" />
          </div>
          <div class="botones">
              <init-button :text="textoR" :onClick="goReg" >Regístrate</init-button>
              <init-button :text="textoI" :onClick="goLog" >Inicia Sesión</init-button>
          </div>
          <br>
          <div class="mtf">
            <label for="">Invita a un amigo:</label>
            <div class="send">
                <input  v-model=emailT type="email" class="form-control init" name="Email" pattern= "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                <init-button v-b-modal.modal-1 class="mailtofriend" :onClick="borrarData" :text="textoE" >Enviar</init-button>
                <b-modal id="modal-1" title="Enviado" hide-footer>
                    <p class="my-4">¡YA ESTÁS UN PASO MÁS CERCA DE HACER EL REGALO PERFECTO!</p>
                </b-modal>
            </div>
          </div>
          <!-- <div class="gmail">
              <input v-model="link.email" type="email" class="form-control" id="email" name="Email"/>
              <label for="email">Envíale el link a un amigo :</label>
          </div> -->
      </div> 
    </template>

    <script>
        import Registro from "../components/Registro";
        import Login from "../components/Login";
        import InitButton from "../components/InitButton";
        import HeaderLogo from "../components/HeaderLogo";
        export default {
            name: "MainPage",
            template: "#main-page",
            components: {
                "reg-form": Registro,
                "login-form": Login,
                "header-logo": HeaderLogo,
                "init-button": InitButton
            },
            data(){
                return{
                    textoR: "Regístrate",
                    textoI: "Inicia Sesión",
                    textoE: "Enviar",
                    emailT: ""
                };
            },
            methods: {
                goReg() {
                    this.$router.push({path:'/register'});
                },
                goLog() {
                    this.$router.push({path:'/login'});
                },
                borrarData() {
                    this.emailT = "";
                }
            }
        }
    </script>
    <style>

    .main-page {
        width: 100vw;
        display: flex;
        height: 90vh;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 50px;
    }

    .botones{
        display: flex;
        flex-direction: row;
        padding: 20px;
    }

    .mtf {
        width: 19vw;
        height: 20vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 20px;
    }
    
    .mailtofriend {
        width: 10vh;
    }

    .send {
        display: flex;
        flex-direction: row;
        position: relative;
        bottom: 10px;
        justify-content: center;
    }
    .init {
        position: relative;
        top: 20px;
    }

    #modal-1 {
        display: flex;
        justify-content: center;
        width: 100vw;

    }

/*     input:valid{
  border: 1px solid #58dc8b;
} */
    </style>