# Contact Form for Maximize

## Instruções para utilizar o projeto via docker

Para utilizar esse projeto via docker você precisa ter o docker instalado e também o git.

-  Este projeto utiliza docker na versão 24.0.7
-  Você pode clonar o repositorio com: 'git clone https://github.com/leonardotavares20/Maximize_Contact_Form.git'
-  Após clonar o repositorio, utilize o comando "cd ./Maximize_Contact_Form no terminal" para mudar o diretorio para o do projeto,
-  Inicie o docker em sua maquina
-  Digite no terminal(pode ser do seu editor de texto ou terminal do sistema) o comando: "docker build -t maximize_contact_form ."
-  E inicie o projeto com o comando: "docker run --name maximize_contact_form -it -p 3000:3000 -d maximize_contact_form",
-  Após isso acesse o projeto na url do seu navegador digitando na barra superior: localhost:3000, após seguir esses passos o projeto vai iniciar no seu navegador
- Para parar a execução digite o comando: 'docker stop maximize_contact_form'
- Para reiniciar a execução do container digite: 'docker start maximize_contact_form'
