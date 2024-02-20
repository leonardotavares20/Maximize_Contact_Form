### Estrutura do Projeto

- Inicialmente eu decidi definir uma estrutura de pastas que são de:

* Arquivos não compilados: pasta src(source) onde os arquivos .styl são gerenciados, entre componentes e partes do layout da aplicação.
* Arquivos estaticos, script e compilados: pasta public, onde contém os arquivos de fontes, imagens e scripts da aplicação, e o css compilado pelo stylus.

- Eu decidi usar o stylus pela sintaxe simples

- Logo após definir a estrutura, configurei o arquivo ngnix.conf, configurando a porta e onde a aplicação iria rodar no servidor, e logo após configurei o arquivo Dockerfile, onde foram listadas todas as dependencias do projeto, e de onde ele deveria copiar os arquivos e em que diretorio ele deveria trabalhar, depois ele faz a compilação do arquivos .styl para css puro, e por fim expõe a porta para o gninx; os comandos para contrução do container e para dar o start e stop no container estão no readme do projeto.

- O proximo passo é definir as fontes que vão ser usadas e a paleta de cores como também a estrutura dos componentes de estilo .styl
