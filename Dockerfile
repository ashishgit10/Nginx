FROM node:slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=8000
EXPOSE 8001
CMD ["npm", "start"]