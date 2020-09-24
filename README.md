# File transfer server
The file transfer server is an auxilliary service that is used by the data analytics-related development tools (Data Analyser, Data Manipulator, Visual Analytics Platform) to handle the transfer of data from one tool to another. It provides a "clipboard"-like function, where one can "copy" the current working data from one tool and "paste" them as the working data in another tool. In this manner, it facilitates working with the data analytics tools, since the user does not have to download the data from one tool and to upload it from the other.

## Deployment
The file transfer server is a Node.js application, so no source code building is required. To deploy the application, go to the home directory of the server and run the following:

```
npm install
npm start
```
The server is also available as a Docker image, which can be deployed according to the instructions at the following link: https://git.activageproject.eu/Deployment/DT-AIOTES_docker/src/master/Files_Transfer
