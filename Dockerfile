FROM node:20.11.1-alpine3.19

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmmirror.com \
  && npm install -g pnpm \
  && pnpm install


EXPOSE 3000
EXPOSE 3333

CMD ["pnpm", "run", "start"]
