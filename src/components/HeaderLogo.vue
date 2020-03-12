    <template id="header-logo">
      <div class="header-logo">
        <img id="logo" src="../assets/img/wishitforme.png" alt="logo" />
      </div>
    </template>

    <script>
        export default {
            name: "HeaderLogo",
            template: "#header-logo"
        }
    </script>
    <style>
    
.header-logo {
  width: 500px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#logo {
  width: 475px;
  height: 175px;
}
    </style>