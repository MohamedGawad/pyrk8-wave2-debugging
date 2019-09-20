----
## Runtime


This is a node.js application and can be run directly from the desktop directory where install files are located.  This requires Node be installed on the machine and __npm install__ be run to download the required node packages.  Once the above is completed start the instructor instance on a Linux or Mac using the insturctor.sh shell file.  On Windows use the instructor.cmd file.  The student instance is started with the student.sh or student.cmd for Linux & Mac or Windows respectively.

The application can also be run from a container.  Files for building, tagging, and pushing the image to Docker Hub (https://hub.docker.com) are provided.  These are:

`Dockerfile` - use to build the image  
`build_push.sh` - Linux or MacOs file to build and push the image  
`build_push.cmd` - Windows command file to build and push the image   

The "build_push.*" files will need to be edited to provide the appropriate Docker Hub account.  This is accomplished by replacing the value "ibmicpcoc" with the Docker Hub account.  Once edited the image can be created and pushed to Docker Hub.  These "build_push" files need to be run from the installation directory where they are located along with the "Dockerfile". 




