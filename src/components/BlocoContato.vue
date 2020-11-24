
<template>

  <div class="blocoContato">
    <div class="botoes">
       <button class="botaoLetra" >
          <h2 id = "letraBotao" > {{(contato.nome[0])}}</h2>  
         </button>
    </div>

    <div class="descricaoContato">
      <span id="nome"> {{(contato.nome)}} </span>
      <span id="numero">{{(contato.telefone)}}</span>
      <span id="email">{{ contato.email }}</span>
       
    </div>
    <div class="botaoExcluirDiv">
     <button @click="excluircontato(contato.id)" class="botaoRemover">
        <img class="botaoExcluir" src="../img/lixeira.png" alt="Remover lançamento" />
      </button>
     </div> 
  </div>

</template>

<script>
import { mapActions } from "vuex";


export default {
  name: "BlocoContato",
   
  methods: mapActions(["excluirContato"]),
  props: {
    tipo: String,
    contato: Object,
  },
  
};



</script>

<style scoped>

.blocoContato {
  display: flex;
  background-color: white;
  border-radius: 20px;
  font-family: "padrao";
  padding: 20px;
  margin-bottom: 20px;
  margin-left: 120px;
  margin-right: 100px;
  margin-top: 30px;
  height: 70px;
  width: 600px;
  border: 1px solid #D8BFD8;
  }

.botoes {
  width: 50%;
}


.botaoRemover {
  border: none;
  outline: none;
  background-color: white;
  vertical-align: middle;
}

.botaoRemover:hover {
  cursor: pointer;
}

.botaoRemover img {
  width: 40px;
}

.botaoRemover img:active {
  filter: invert(100%);
}

.descricaoContato {
  width: 50%;
  float: right;
  text-align: right;
}

.descricaoContato span {
  display: block;
  font-size: 80%;
}

#nome {
  font-family: "negrito";
  font-size: 170% !important;
}

#numero{
  margin-top: 4px;
  margin-bottom: 5px;

}
#email{
  margin-bottom: -5%;
}
.botaoExcluir{
  height:30px ;
  width: 65px;
}
.botaoExcluirDiv{
  margin-left:4px;
  margin-top: 40px;
  margin-right: -20px;
}

.botaoLetra{
  border-radius:50%;
  background-color:#5333ed;
  border: none;
  width:70px;
	height:70px;
  font-size: 130%;
  outline: none;
  color: white;
  font-family: "negrito";

}

#letraBotao{
  font-size: 130%;
  margin-top: 40%;
}
</style>
