
  <template>
    <div id="painelContato">
      <div id="formularioContato">
        <form @submit="salvar">

          <label for="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            required
            v-model ="nome"
          />


          <label for="telefone">Telefone</label>
         
          <input
            type="tel" 
            name="telefone"
            id="telefone"
            pattern = "\(?[0-9]{2}\)? ?[0-9]{4,6}?-?[0-9]{3,4}?$" 
            placeholder=" DDD 12345-6789"
            required v-model="telefone"
          />
          
          <label for="email">E-mail</label>
          <input type="email" name="email" id="email" required v-model="email" />

        
          <button>Salvar</button>
        </form>
      </div>

      <div id="areaContatos">
        <BlocoContato
          
          v-for="contato in todosContatos"
          v-bind:key="contato.id"
          :tipo="contato.nome"
          :contato="contato"
           
        />
      </div>
    
    </div>
  </template>

  <script>
  import { mapGetters, mapActions } from "vuex";
  import BlocoContato from "./BlocoContato.vue";
  import Contato from "../models/Contato";



 
  export default {

    components: {
      BlocoContato,
    },
    computed: mapGetters(["todosContatos"]),
    methods: {
      ...mapActions(["salvarContato"]),
      salvar(event) {
        event.preventDefault();
        const contato = new Contato(this.nome, this.telefone, this.email);
        this.salvarContato(contato);
        this.limparFormulario();
      },
      limparFormulario() {
        this.nome = "";
        this.telefone = "";
        this.email = "";
      },

    }, 
   

  };
  </script>

  <style scoped>
  #painelContato {
    width: 40%;  
    display:flex;
  }

  #formularioContato {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    font-family: "padrao";
    width: 10000px;
  }

  #nome,
  #telefone,
  #email,
  button {
    display: block;
    margin-bottom: 10px;
  }

  #nome,
  #telefone,
  #email {
    height: 25px;
    font-family: "padrao";
    font-size: 100%;
    border: 1px solid #cccccc;
    border-radius: 5px;
    outline: none;
  }


  #tiposContato {
    margin-bottom: 20px;
    font-family: "negrito";
    font-size: 110%;
  }

  #tiposContato label {
    margin-right: 20px;
  }

  #telefone,
  #nome,
  #email {
    width: 300%;
  }

  button {
    background-color: var(--cor-destaque);
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    font-size: 120%;
    
  }

  #areaContatos {
    
    background-color: #E6E6FA;
    height: 104%;
    margin-left: 50%;
    border-radius: 20px;
    min-width: 165%;
  }
  </style>