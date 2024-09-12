# Etapa 1: Construção do projeto
FROM node:18-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Roda o build para gerar os arquivos de produção
RUN npm run build

# Etapa 2: Configuração do Nginx
FROM nginx:alpine

# Remove o conteúdo padrão do Nginx e copia o build do React para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80 para acesso
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
