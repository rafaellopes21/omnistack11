const express = require('express'); 

const app = express();

app.get('/', (request, response) => {
   //Posso retornar assim (enviamdo msg)
  //  return response.send('Hello Word');

    //Ou posso retornar enviando JSON
    return response.json({
        evento: "Semana OmniStack 11.0",
        aluno: "Rafael"
    })
});

app.listen(3333);