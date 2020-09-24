FROM node:10

# Create the required folders
RUN mkdir /opt/nodejs-server
RUN mkdir /opt/nodejs-server/config
RUN mkdir /opt/nodejs-server/models
RUN mkdir /opt/nodejs-server/public
RUN mkdir /opt/nodejs-server/routes

# Copy all required files
COPY ./config /opt/nodejs-server/config
COPY ./models /opt/nodejs-server/models
COPY ./public /opt/nodejs-server/public
COPY ./routes /opt/nodejs-server/routes
COPY ./package*.json /opt/nodejs-server/
COPY ./app.js /opt/nodejs-server/

RUN apt-get install nano;

# Change working directory
WORKDIR /opt/nodejs-server

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]