FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

#Build app
RUN npm run build

EXPOSE 3000
CMD [ "node", "build" ]