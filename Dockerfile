FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD npm run start

#CMD npm run dev 
#ONLY IN DEVELOPMENT...IF THIS WORKS IT DOESN'T MEAN ITS OK TO PUSH