FROM nikolaik/python-nodejs:python3.9-nodejs15-alpine

RUN apk update && \
    pip install --upgrade awscli

WORKDIR /app

COPY package.json ./
RUN npm install
COPY public ./public
COPY src ./src


EXPOSE 3000

CMD ["npm", "start"]