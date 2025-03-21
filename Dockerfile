# Use Node.js official image as base
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app source code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD [ "node", "server.js" ] 