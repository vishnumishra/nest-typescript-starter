FROM node:14.17.0-alpine

LABEL maintainer="cybercognizant@gmail.com"

# Create app directory
WORKDIR /var/www/backend

# Install app dependencies - For NPM use: `COPY package.json package-lock.lock ./`
COPY package.json package-lock.json ./ 
# For NPM use: `RUN npm ci`
RUN npm ci

# Add nano editor
RUN apk add nano

# Add bash & colors to bash commands
RUN apk add bash
COPY .docker-prompt /etc/.docker-prompt
RUN echo '. /etc/.docker-prompt' >> /etc/bash.bashrc \
  && echo '. /etc/.docker-prompt' >> /root/.bashrc

# Copy important files - Add ormconfig.ts here if using Typeorm
COPY .eslintrc.js nest-cli.json tsconfig.json tsconfig.build.json ./

# Copy env
COPY .env /var/www/backend/.env

# Add storage folder to the container (If you want to add other folder contents to the container)
# ADD storage /var/www/backend/storage

# Entrypoint command - Replace `"yarn"` with `"npm", "run"` if you are using NPM as your package manager.
# You can update this to run other NodeJS apps
CMD [ "npm","run", "start:dev", "--preserveWatchOutput" ]