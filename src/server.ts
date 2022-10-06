import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/bsm', (request, response) => {
    response.send('Mentalidades:<br>' +
                '- Persistência<br>- Responsabilidade Pessoal<br>- Orientação ao Futuro<br>- Mentalidade de Crescimento'+
                '<br><br>Habilidades Comportamentais:<br>'+
                '- Trabalho em Equipe<br>- Atenção aos Detalhes<br>- Proatividade<br>- Comunicação'
                );
});

app.get('/objetivos', (request, response) => {
    response.send('Objetivos de aprendizagem:<br>'+
                '- MySQL<br>- Node e Express.js<br>- API com Nest.js');
});

app.listen(port, () => {
    console.log(`[3000] Server is running...`);

});