FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
COPY build.sh ./
RUN npm install
RUN build.sh
# RUN npm ci --only=production
COPY ./build .
EXPOSE 8080
CMD [ "node", "server.js" ]
