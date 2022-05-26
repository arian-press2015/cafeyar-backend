export default () => ({
  env: process.env.ENV,
  port: parseInt(process.env.PORT, 10),
  jwt_secret: process.env.JWT_SECRET,
  redis_url: process.env.REDIS_URL,
});
