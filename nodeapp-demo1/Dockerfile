# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "server.js"]
