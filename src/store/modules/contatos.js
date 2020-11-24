

const moduloContatos = {
    
    state: {
        contatos: [

         {
                id: Math.random().toString(36).substr(2, 5),
                nome: "Christoph Waltz",
                telefone: "67 999999999",
                email: "algumacoisa@gmail.com"
            },
             {
                id: Math.random().toString(36).substr(2, 5),
                nome: "Quentin Tarantino ",
                telefone: "67 999999999",
                email: "algumacoisa@gmail.com"
            },
   
        ],
  
    },
   
  
    
    getters: {
        
        todosContatos: state => state.contatos
        
    },
    actions: {
        salvarContato: ({ commit }, contato) => {
            commit("adicionarContato", contato);

        },
        excluirContato: ({commit}, id) => {
            commit('removerContato', id);
        }
        
    },
    mutations: {
        adicionarContato: 
            (state, contato) => state.contatos.unshift(contato),
        removerContato: 
            (state, id) => 
                state.contatos = 
                    state.contatos.filter(contato => contato.id !== id)
    }

    
};

export default moduloContatos;