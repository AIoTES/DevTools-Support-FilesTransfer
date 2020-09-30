# File transfer server
The file transfer server is an auxilliary service that is used by the data analytics-related development tools (Data Analyser, Data Manipulator, Visual Analytics Platform) to handle the transfer of data from one tool to another. It provides a "clipboard"-like function, where one can "copy" the current working data from one tool and "paste" them as the working data in another tool. In this manner, it facilitates working with the data analytics tools, since the user does not have to download the data from one tool and to upload it from the other.

## Deployment
The file transfer server is a Node.js application, so no source code building is required. To deploy the application, go to the home directory of the server and run the following:

```
npm install
npm start
```
The server is also available as a Docker image, which can be deployed according to the instructions at the following link: https://git.activageproject.eu/Deployment/DT-AIOTES_docker/src/master/Files_Transfer

## Deployment through docker image

Docker image can be build using the Dockerfile that exist in the root directory of this project.

To deploy the image that exist in Activage Docker Registry, go to [DT-AIOTES_docker/Files_Transfer](https://git.activageproject.eu/Deployment/DT-AIOTES_docker/src/master/Files_Transfer), download the `docker-compose.yml` in a local directory. Modify the environment variables and ports to reflect your configuration. Specifically:

* The ***KEY_CLOACK*** environment variable defines the address (host and port) of a running instance of AIOTES—e.g., https://iti-263.iti.gr:9081/analytics

Then run the following command from the same directory:

```
docker-compose up -d
```
# License

```
Copyright 2020 CERTH/ITI Visual Analytics Lab

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```