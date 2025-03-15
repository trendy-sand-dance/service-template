FROM node:22-slim

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./

RUN npm install -D 

COPY . .

ARG LISTEN_ADDRESS="0.0.0.0"
ARG LISTEN_PORT=8000

ENV LISTEN_ADDRESS=${LISTEN_ADDRESS}
ENV LISTEN_PORT=${LISTEN_PORT}

CMD ["npm", "run", "dev"]
