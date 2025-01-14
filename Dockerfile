FROM node
WORKDIR /app
COPY package.json /app
RUN npm install --force --loglevel verbose
COPY . /app
CMD ["npm","start"]
EXPOSE 30001