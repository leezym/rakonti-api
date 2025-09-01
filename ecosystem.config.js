module.exports = {
  apps: [
    {
      name: "rakonti-api",
      script: "./index.js",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: PORT,
        DB_NAME: DB_NAME,
        DB_USER: DB_USER,
        DB_PASSWORD: DB_PASSWORD,
        DB_HOST: DB_HOST,
        DB_PORT: DB_PORT
      }
    }
  ]
};