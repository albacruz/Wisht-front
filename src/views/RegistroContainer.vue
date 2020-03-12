<template id="reg-container">
     <div class="reg-container">
        <header-logo></header-logo>
        <registro-form></registro-form>


    </div>
</template>

<script>
import HeaderLogo from "../components/HeaderLogo";
import Registro from "../components/Registro";
export default {
    name: "ContainerRegistro",
    template: "#reg-container",
    components: {
      'header-logo': HeaderLogo,
      'registro-form': Registro
    }

}
</script>

<style>
.reg-container {
  width: 550px;
  height: 90vh;
  margin: 50px auto;
  border: 1px solid #3332;
  border-radius: 10px;
  background-color: #fff5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}
</style>