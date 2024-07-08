FROM node:22-alpine
WORKDIR /app
RUN chown node:node ./
USER node
COPY package.json package-lock.json /app/
RUN npm ci && npm cache clean --force
COPY . .
EXPOSE 3000
CMD [ "npm","run","dev" ]