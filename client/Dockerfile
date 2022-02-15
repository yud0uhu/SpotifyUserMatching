FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

ENV VITE_AUTH0_DOMAIN=${DOMAIN} 
ENV VITE_AUTH0_CLIENT_ID=${CLIENT_ID}
ENV VITE_AUTH0_AUDIENCE=${AUDIENCE}
ENV VITE_AUTH0_SCOPE=${SCOPE}

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]