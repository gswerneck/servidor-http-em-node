# Servidor HTTP em NodeJS
## Servidor HTTP que, para cada requisição GET, retorna um JSON cuja chave extenso seja a versão por extenso do número inteiro enviado no path. Os números podem estar no intervalo [-99999, 99999].


   * [Objetivo](#objetivo)
   * [Instruções](#instrucoes)
   * [Tecnologias](#tecnologias)
   * [Autor](#autor)

### Objetivo
Repositório criado para avaliação da segunda etapa do processo seletivo para a vaga de Estágio em Desenvolvimento de Software, no Instituto CERTI Sapientia.

### Instruções
O programa pode ser executado de duas maneiras:
  * Caso seja de sua preferência usar o Docker, siga os seguintes passos:
    - Baixe e salve os arquivos da pasta files
    - Inicie o docker e o Terminal
    - Com o Terminal aberto, navegue até o diretório da pasta "files"
    - O próximo passo é gerar a imagem do container. Para isso, digite o seguinte comando no Terminal: docker build -t gabriel/httpserver . 
    - Para o próximo passo, precisamos do ID da imagem (IMAGE ID). Para isso, digite no Terminal: docker image ls
    - Agora, basta rodar o comando: docker run --rm --name httpserver "IMAGE ID"
    - Pronto, o servidor está funcionando! 
    - Agora basta abrir o browser e digitar 'http://localhost:3000/' e logo em seguida, o valor


### Tecnologias

### Autor