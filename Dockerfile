FROM nginx:alpine

# Atualiza o índice do apk e instala Node.js e npm
RUN apk update && apk add --no-cache nodejs npm

# Copia o arquivo package.json e package-lock.json
COPY package*.json ./

# Limpa o cache do npm e instala as dependências do projeto
RUN npm cache clean --force && npm ci --silent

# Instala o Stylus globalmente
RUN npm install -g stylus

# Copia o restante dos arquivos do projeto
COPY . /usr/share/nginx/html

# Define o diretório de trabalho para o diretório do projeto
WORKDIR /usr/share/nginx/html

# Compila os arquivos Stylus
RUN stylus --prefix style- src/styles/app.styl --out public/css

# Expor a porta 80 para o Nginx
EXPOSE 80
