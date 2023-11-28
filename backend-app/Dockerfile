FROM node:21-bookworm

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Expose the port that the app will run on
EXPOSE 4447

# Command to run the application
CMD ["npm", "start"]
