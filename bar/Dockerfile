# syntax=docker/dockerfile:1

FROM node:20-alpine
WORKDIR /bar
COPY . .
RUN npm install --production
CMD ["node", "index.js"]
EXPOSE 3002