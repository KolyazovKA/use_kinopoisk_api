FROM node:20-bookworm-slim as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

#FROM nginx:stable-alpine
#
#COPY --from=build /app/ /usr/share/nginx/html
#
#EXPOSE 80
#
#ENTRYPOINT ["nginx", "-g", "daemon off;"]

