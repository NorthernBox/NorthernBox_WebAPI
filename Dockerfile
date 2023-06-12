# Base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json yarn.lock  ./

# Install yarn globally
RUN apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh -s -- --version 1.22.11

# Add yarn to the PATH
ENV PATH="/root/.yarn/bin:$PATH"


# Install dependencies
RUN yarn install

# Copy the application files
COPY . .

# Build the React app
RUN yarn build

# Set environment variables
ENV PORT=8000
ENV NODE_ENV=production

# Expose the port on which the app will run
EXPOSE $PORT

# Start the React app
CMD ["npx", "ts-node", "src/main.ts"]