# ThayOG for Maximize

## Commands to utilize the project with Docker

To use this project with docker, you need to instal Docker and Git

-  Version docker: 24.0.7
-  You can clone the repo: 'git clone https://github.com/leonardotavares20/ThayOG-Maximize.git'
-  After clone the repo, use "cd ./ThayOG-Maximize" in terminal to change the directory for the project,
-  Start docker in your pc
-  Type in terminal: "docker build -t thayog-maximize ."
-  Start the container: "docker run --name thayog-maximize -it -p 8080:80 -d thayog-maximize",
-  After acess the project at the port: localhost:8080
- To stop the container: 'docker stop thayog-maximize'
- To restart execution: 'docker start thayog-maximize'
