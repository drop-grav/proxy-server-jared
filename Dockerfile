FROM node:latest
RUN mkdir -p src
COPY . /src
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]