FROM node:alpine


WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json .

RUN npm install

# Bundle app source
COPY server.js .

EXPOSE 3001

CMD [ "node", "server.js" ]