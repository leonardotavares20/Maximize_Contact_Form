# Contact Form for Maximize

## Instruções para utilizar o projeto via docker

Para utilizar esse projeto via docker você precisa ter o docker instalado e também o git.

-  Este projeto utiliza docker na versão 24.0.7
-  Você pode clonar o repositorio com: 'git clone https://github.com/leonardotavares20/ThayOG-Maximize.git'
-  Após clonar o repositorio, utilize o comando "cd ./ThayOG-Maximize no terminal" para mudar o diretorio para o do projeto,
-  Inicie o docker em sua maquina
-  Digite no terminal(pode ser do seu editor de texto ou terminal do sistema) o comando: "docker build -t thayog-maximize ."
-  E inicie o projeto com o comando: "docker run --name thayog-maximize -it -p 8080:80 -d thayog-maximize",
-  Após isso acesse o projeto na url do seu navegador digitando na barra superior: localhost:8080, após seguir esses passos o projeto vai iniciar no seu navegador
- Para parar a execução digite o comando: 'docker stop thayog-maximize'
- Para reiniciar a execução do container digite: 'docker start thayog-maximize'
