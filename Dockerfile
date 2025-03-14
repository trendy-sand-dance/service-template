FROM node:22-slim AS build-stage

WORKDIR /app


COPY src/package.json src/package-lock.json ./

RUN npm install -D 
RUN npm install -g typescript


COPY src/ .


ARG LISTEN_ADDRESS="0.0.0.0"
ARG LISTEN_PORT=8000

ENV LISTEN_ADDRESS=${LISTEN_ADDRESS}
ENV LISTEN_PORT=${LISTEN_PORT}

RUN tsc 

# CMD ["npm", "run", "build"]
# CMD ["sleep", "infinity"]
