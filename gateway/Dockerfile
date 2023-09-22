# syntax=docker/dockerfile:1

FROM node:20-alpine
WORKDIR /gateway
COPY . .
RUN npm install --production
CMD ["node", "index.js"]
EXPOSE 3000