FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD node seed.js && npm run dev

EXPOSE 3001
