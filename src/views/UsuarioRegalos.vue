    <template id="user-presents">
      <div class="user-presents">
        <nav-bar></nav-bar>
        <div class="firstRow">
            <profile-header></profile-header>
            <tag-cloud></tag-cloud>
          </div>
        <div class="regalos">
          <present-comp :data=data1></present-comp>
          <present-comp :data=data2></present-comp>
          <present-comp :data=data3></present-comp>
          <present-comp :data=data4></present-comp>
          <present-comp :data=data5></present-comp>
          <present-comp :data=data6></present-comp>
          <present-comp :data=data7></present-comp>
          <present-comp :data=data8></present-comp>
          <present-comp :data=data9></present-comp>
          <present-comp :data=data10></present-comp>
        </div>
      </div>
    </template>

    <script>
        import ProfileHeader from "../components/ProfileHeader";
        import PresentComp from "../components/PresentComp";
        import TagCloud from "../components/TagCloud";
        import NavBar from "../components/NavBar"
        export default {
            name: "UsuarioRegalos",
            template: "#user-presents",
            components: {
              'profile-header': ProfileHeader,
              'present-comp': PresentComp,
              "tag-cloud": TagCloud,
              "nav-bar": NavBar
            },
            data() {
              return {
                  data1: {
                  },
                  data2: {

                  },
                  data3: {

                  },
                  data4: {
                  },
                  data5: {
                  },
                  data6: {
                  },
                  data7: {
                  },
                  data8: {
                  },
                  data9: {
                  },
                  data10: {
                  },
              };
            },
          mounted() {
                  this.data1= {
                      name: "Spider-Man: Homecoming",
                      /* description: "Más de 60 minutos de extras Escenas eliminadas y extendidas Tomas falsas de los actores La guía de estudio de Spidey Anuncios alternativos e inéditos de Capitán América Secuelas Una telaraña enredada.", */
                      link: "https://www.amazon.es/Spider-Man-Homecoming-Blu-ray-Tom-Holland/dp/B074F37CRX/ref=pd_sbs_74_25?_encoding=UTF8&pd_rd_i=B074F37CRX&pd_rd_r=a7f5a92d-7a29-4e45-8147-0ce5552cdedd&pd_rd_w=rHFjI&pd_rd_wg=CMcuW&pf_rd_p=f9384d3f-fa3d-4e25-8bc3-b0c7853cd8a6&pf_rd_r=NPDHYNG1T36V3GVBGXQR&psc=1&refRID=NPDHYNG1T36V3GVBGXQR",
                      image: "https://images-na.ssl-images-amazon.com/images/I/81QwUjiLJVL._SL1400_.jpg",
                  };
                  this.data2= {
                       name: "Harry Potter Caja de Música",
    link: "https://www.amazon.es/BADARENXS-cl%C3%A1sico-artesan%C3%ADas-Creativa-Mejores/dp/B07F3TT6NL/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=harry+potter&qid=1565786718&s=gateway&sr=8-5",
    image: "https://images-na.ssl-images-amazon.com/images/I/71DT2ndOp2L._SL1500_.jpg",
                  };
                  this.data3= {
                         name: "LED Signs",
                      /* description: "Más de 60 minutos de extras Escenas eliminadas y extendidas Tomas falsas de los actores La guía de estudio de Spidey Anuncios alternativos e inéditos de Capitán América Secuelas Una telaraña enredada.", */
                      link: "https://fancy.com/things/1716405687669494847/LED-Signs?utm=rec",
                      image: "https://thefancy-media-ec6.thefancy.com/1280/20180626/1716405687669494847_3c77a9e33cf7.jpg", 
                  };
                  this.data4= {
                       name: "Tetris Lights",
    link: "https://fancy.com/things/150913101577847183/Tetris-Lights?utm=rec",
    image: "https://thefancy-media-ec5.thefancy.com/1280/20120727/150913101577847183_70159f4dada7.jpg",
                        };
                  this.data5= {
                      name: "Vuelo Parapente",
    link: "https://www.groupon.es/deals/vuelo-parapente",
    image: "https://img.grouponcdn.com/deal/7RuAyXNubemiNXvHtXYy/HE-1000x600/v1/c700x420.jpg"
                  };
                  this.data6= {
                      name: "Cascos PS4 con Micrófono",
                      /* description: "Oc Gaming PS4 Dualshock Playstation 4 Controlador Suave de Encargo del Tacto Modelo JDM 040 Camaleón", */
                      link: "https://www.amazon.es/dp/B07SHGQM4D/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B07SHGQM4D&pd_rd_w=2leD9&pf_rd_p=4c3f05cb-2eb1-40e6-8a23-284c1d5bc919&pd_rd_wg=4jgX1&pf_rd_r=MTVJ7GXRJ9F9604PAGA2&pd_rd_r=dd4b6460-7202-4249-acb2-515af0f57d2c&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExRlZINTlHOUw3WkFBJmVuY3J5cHRlZElkPUEwMjg0NTUwS05NWUJBRUhBU1RIJmVuY3J5cHRlZEFkSWQ9QTAxNzQzMTEyQktaU0o2RUozUEVXJndpZGdldE5hbWU9c3BfZGV0YWlsJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
                     image: "https://images-na.ssl-images-amazon.com/images/I/71egna6j8bL._SL1200_.jpg",
                  };
                  this.data7= {
                      name: "Kit de protección para Nintendo Switch",
                      /* description: "AmazonBasics - Kit de protección para Nintendo Switch, con funda de transporte y protector de pantalla de cristal templado - Rojo", */
                      link: "https://www.amazon.es/AmazonBasics-protecci%C3%B3n-Nintendo-transporte-protector/dp/B071PB1BBH/ref=pd_rhf_se_s_sspa_dk_rhf_search_pt_sub_0_3/257-9268733-4001747?_encoding=UTF8&pd_rd_i=B071PB1BBH&pd_rd_r=fd49af2a-6eaf-43d9-8c7a-f95ab1e42927&pd_rd_w=woCAD&pd_rd_wg=YSjvG&pf_rd_p=57b6685a-ad0f-4efe-bccf-0d5c6f33772c&pf_rd_r=QWSEDCZ20KZB12DEYGSR&psc=1&refRID=QWSEDCZ20KZB12DEYGSR&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySFRXV0pSSkNZSzVYJmVuY3J5cHRlZElkPUEwODIyNjQ4SVNXSzhZQTlaT1JOJmVuY3J5cHRlZEFkSWQ9QTAxMjk5NzUyRTdFMEJWNFBNQk9CJndpZGdldE5hbWU9c3BfcmhmX3NlYXJjaCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
                     image: "https://images-na.ssl-images-amazon.com/images/I/716AQFD5HbL._SL1500_.jpg",
                  };
                  this.data8= {
                      name: "Pack Harry Potter - The Complete Collection",
                      /* description: "Kindle Paperwhite Reacondicionado Certificado- Resistente al agua, pantalla de alta resolución de 6, 8 GB - incluye ofertas especiales", */
                      link: "https://www.amazon.es/Pack-Harry-Potter-Complete-Collection/dp/1408856778/ref=sr_1_6?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=harry+potter&qid=1565786865&s=gateway&sr=8-6",
                     image: "https://images-na.ssl-images-amazon.com/images/I/71rOzy4cyAL.jpg",
                  };
                  this.data9= {
                     name: "Shark House for Cats",

    link: "https://fancy.com/things/876447912656111912/Shark-Cat-House?utm=rec",
    image: "https://thefancy-media-ec3.thefancy.com/1280/20150424/876447912656111912_e352e02741d3.jpg", 
                  };
                  this.data10= {
                      name: "Mochila",
                      /* description: "Samsonite Paradiver Light, Mochila, L (45cm-19L), Multicolor (Millennium Falcon)", */
                      link: "https://www.amazon.es/Samsonite-Paradiver-45cm-19L-Multicolor-Millennium/dp/B076CL1CJ2/ref=sr_1_9?fst=as%3Aoff&pf_rd_p=747f3939-b0fd-486f-beb6-479349e975b5&pf_rd_r=H5WD43SK1FEVQQMZVYFV&qid=1565634227&rnid=12710835031&s=apparel&sr=1-9",
                     image: "https://images-na.ssl-images-amazon.com/images/I/61UkOgANK8L._SL1500_.jpg",
                  };
            },

            watch: {
              '$route' (to, from){
                  this.data1= {};
                  this.data1= {
                      name: "Star Wars: Los Últimos Jedi",
                        /* description: "La saga de Skywalker continúa. Ahora los héroes de El Despertar de la Fuerza se unen a las leyendas galácticas en una aventura épica que descubre antiguos misterios de la Fuerza.", */
                        link: "https://www.amazon.es/Star-Wars-%C3%9Altimos-Jedi-Blu-ray/dp/B078FHCJTG/ref=pd_sim_74_2/257-9268733-4001747?_encoding=UTF8&pd_rd_i=B078FHCJTG&pd_rd_r=a7f5a92d-7a29-4e45-8147-0ce5552cdedd&pd_rd_w=F3auG&pd_rd_wg=CMcuW&pf_rd_p=7cb3e23e-064d-4c10-b8ca-d3e14b48695e&pf_rd_r=NPDHYNG1T36V3GVBGXQR&psc=1&refRID=NPDHYNG1T36V3GVBGXQR",
                       image: "https://images-na.ssl-images-amazon.com/images/I/81L5y8oHFwL._SL1500_.jpg",
                  };
                  this.data2= {};
                  this.data2= {
                       
    name: "The Last Guardian",
                      /* description: "The Last Guardian (PS4)", */
                      link: "https://www.amazon.es/Sony-CEE-Games-New-9838951/dp/B00ZRVXD74/ref=pd_sim_63_13?_encoding=UTF8&pd_rd_i=B00ZRVXD74&pd_rd_r=723aab37-81ca-4678-b9ca-836792b97bd8&pd_rd_w=JvjTh&pd_rd_wg=IvJhs&pf_rd_p=7cb3e23e-064d-4c10-b8ca-d3e14b48695e&pf_rd_r=BT8V1K5VG9Z20ZMAFWZZ&psc=1&refRID=BT8V1K5VG9Z20ZMAFWZZ",
                     image: "https://images-na.ssl-images-amazon.com/images/I/71DWIiMaJJL._SL1087_.jpg",
                  };
                  this.data3= {};
                  this.data3= {
                               name: "Xiaomi Mi 8 Lite",
                      /* description: "Xiaomi Mi 8 Lite 15,9 cm (6.26) 4 GB 64 GB SIM Doble 4G Negro 3350 mAh - Smartphone (15,9 cm (6.26), 2280 x 1080 Pixeles, 4 GB, 64 GB, 12 MP, Negro)", */
                      link: "https://www.amazon.es/Xiaomi-Lite-6-26-Doble-Negro/dp/B07JMPGNHK/ref=sr_1_9?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=xiaomi&qid=1565633832&s=watch&sr=1-9-catcorr",
                     image: "https://images-na.ssl-images-amazon.com/images/I/61oKJ6RYCDL._SL1500_.jpg",
                  };
                  this.data4= {};
                  this.data4= {
                       name: "Pokèmon - Funda de edredón para Cama Individual,",

    link: "https://www.amazon.es/Pok%C3%A8mon-Individual-Reversible-Encantador-Almohada/dp/B07HM6VQBJ/ref=sr_1_22?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=pokemon&qid=1565785718&s=gateway&sr=8-22",
    image: "https://images-na.ssl-images-amazon.com/images/I/71w%2Bu9py34L._SL1300_.jpg",
                  };
                  this.data5= {};
                  this.data5= {
                   name: "Mr. Brainwash Rescue - Pink (2019) Screen Print",

    link: "https://fancy.com/things/1948698658807483209/Mr.-Brainwash-%22Rescue---Pink%22-(2019)-Screen-Print?utm=rec",
    image: "https://thefancy-media-ec4.thefancy.com/1280/20190512/1948698658807483209_18900b56a030.png", 
                  };
                  this.data6= {};
                  this.data6= {
                     name: "Han Solo in Carbonite Ice Cube Tray",

    link: "https://fancy.com/things/260803111/Han-Solo-in-Carbonite-Ice-Cube-Tray",
    image: "https://thefancy-media-ec5.thefancy.com/1280/20110902/260803111_1f1366732af2.jpg",
                  };
                  this.data7= {};
                  this.data7= {
                     name: "Ninja Mug",

    link: "https://fancy.com/things/570616281963697149/Ninja-Mug?utm=rec",
    image: "https://thefancy-media-ec6.thefancy.com/1280/20140226/570616281963697149_30a3b52dd986.jpg",
                  };
                  this.data8= {};
                  this.data8= {
                          name: "Papertrophy XL Bull",
    link: "https://fancy.com/things/1028790528642123743/Bull-Papertrophy?utm=rec",

    image: "https://thefancy-media-ec1.thefancy.com/1280/20151120/1028790528642123743_5948a3fccc42.jpg",
                  };
                  this.data9= {};
                  this.data9= {
                     name: "Zapatillas Pikachu",

    link: "https://www.amazon.es/keysm-Pokemon-Peluche-Pikachu-Zapatillas/dp/B01MXLMRYP/ref=sr_1_41?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=pokemon&qid=1565785829&s=gateway&sr=8-41",
    image: "https://images-na.ssl-images-amazon.com/images/I/71LQkkJVxvL._SL1200_.jpg",
                  };
                  this.data10= {};
                  this.data10= {
                     name: "3D LED Star Wars Luz de noche",

    link: "https://www.amazon.es/L%C3%A1mpara-ilusi%C3%B3n-Millennium-patrones-decoraci%C3%B3n/dp/B07BMP4PMK/ref=sr_1_5?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=star+wars&qid=1565785901&s=gateway&sr=8-5",
    image: "https://images-na.ssl-images-amazon.com/images/I/91fQuYh11HL._SL1500_.jpg",
                  };
              }
            }
        }
    </script>
    <style>
    .firstRow {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .user-presents {
      display: flex;
      flex-direction: column;
    }

      .regalos {
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
    </style>