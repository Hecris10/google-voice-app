#!/bin/bash

# Install dependencies first
npm install

# Install Prisma globally
npm install -g prisma

# Generate Prisma Client
prisma generate

# Run database migrations
prisma migrate deploy

# Start the application
npm run start