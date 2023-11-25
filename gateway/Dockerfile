# syntax=docker/dockerfile:1

# specifies parent image from which youa are building
FROM node:20-alpine
# sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow
WORKDIR /gateway
# copies files or directories from <src> and adds them to the filesystem of the container at the path <dest>
COPY . .
# executes commands in new layer on top of current image and commits the results. Resulting image will be used for next step in Dockerfile
RUN npm install --production
# CMD ["executable","param1","param2"] (exec form, this is the preferred form. Note: does not invoke a command shell)
CMD ["node", "index.js"]
# does not actually publish port; rather, functions as type of documentation between builder of the image and person who runs the container, about which ports are intended to be published
EXPOSE 3000