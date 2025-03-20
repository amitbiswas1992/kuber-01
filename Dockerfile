# Use Node.js official image as base
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy app source code
COPY . .

# Create a directory for logs if your app needs it
RUN mkdir -p logs

# Expose the port your app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["node", "server.js"]