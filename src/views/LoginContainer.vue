<template id="log-container">
     <div class="log-container">
        <header-logo></header-logo>
        <login-form></login-form>


    </div>
</template>

<script>
import HeaderLogo from "../components/HeaderLogo";
import Login from "../components/Login";
export default {
    name: "LoginContainer",
    template: "#log-container",
    components: {
      'header-logo': HeaderLogo,
      'login-form': Login
    }

}
</script>

<style>
.log-container {
  width: 550px;
  height: 65vh;
  margin: 50px auto;
  border: 1px solid #3332;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff5;
  padding: 30px;
}

.login-form {
  margin-top: 30px;
}
</style>