FROM node:24-bookworm-slim

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .

EXPOSE 3000

# NOTE: compose.yaml の node_modules volume は lockfile を更新しても古いまま残るため、起動のたびに install して揃えます。
ENTRYPOINT ["sh", "-c", "yarn install --frozen-lockfile --silent && exec \"$@\"", "--"]
CMD ["yarn", "dev", "--hostname", "0.0.0.0", "--port", "3000"]
