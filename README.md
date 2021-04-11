<h1 align="center">Servidor HTTP em NodeJS</h1>

### Servidor HTTP que, para cada requisição GET, retorna um JSON cuja chave extenso seja a versão por extenso do número inteiro enviado no path. Os números podem estar no intervalo [-99999, 99999].

## Objetivo
Repositório criado para avaliação da segunda etapa do processo seletivo para a vaga de Estágio em Desenvolvimento de Software, no Instituto CERTI Sapientia.

## Instruções
O programa pode ser executado de duas maneiras:
  * Caso seja de sua preferência usar o Docker, siga os seguintes passos:
    - Baixe e salve os arquivos da pasta files
    - Inicie o docker e o Terminal do seu sistema
    - Com o Terminal aberto, navegue até o diretório da pasta "files". Ou então, abra a pasta no Visual Studio Code e use o terminal do programa.
    - O próximo passo é gerar a imagem do container. Para isso, digite o seguinte comando no Terminal: docker build -t gabriel/httpserver . 
    - Para o próximo passo, precisamos do ID da imagem (IMAGE ID). Para isso, digite no Terminal: docker image ls
    - Agora, basta rodar o comando: docker run --rm --name httpserver "IMAGE ID"
    - Pronto, o servidor está funcionando! 
    - Agora basta abrir o browser e digitar 'http://localhost:3000/' e logo em seguida, o valor
    - Ou se preferir, usar o terminal para passar os valores: 'curl localhost:3000/' e logo em seguida, o valor
  * Se o procedimento acima nao funcionar, ou se você nao tiver o docker em seu dispositivo, execute do programa da seguinte forma:
    - Antes de tudo, você vai precisar ter o node instalado em sua máquina -> 'https://nodejs.org/en/download/'
    - Baixe e salve os arquivos da pasta files
    - O servidor for criado com o framework ExpressJS, então também é necessário ter esse módulo instalado. Para isso, abra o terminal e vá para a pasta do projeto, em seguida digite no terminal: npm i express
    - Agora que tudo foi instalado, o proximo passo é iniciar o servidor. Na pasta files, digite no terminal: node index.js
    - Pronto, o servidor está funcionando! 
    - Agora basta abrir o browser e digitar 'http://localhost:3000/' e logo em seguida, o valor
    - Ou se preferir, usar o terminal para passar os valores: 'curl localhost:3000/' e logo em seguida, o valor

## Tecnologias
Para a criação desse programa, foram utilizadas as seguintes ferramentas:
  * Visual Studio Code
  * NodeJS
  * ExpressJS
  * Docker

## Autor
Gabriel Siqueira Werneck