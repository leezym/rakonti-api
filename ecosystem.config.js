module.exports = {
  apps: [
    {
      name: "rakonti-api",
      script: "./index.js",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 55303,
        DB_NAME: "rakonti",
        DB_USER: "admin",
        DB_PASSWORD: "admin",
        DB_HOST: "localhost",
        DB_PORT: 5432
      }
    }
  ]
};