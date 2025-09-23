import "dotenv/config";

const _env = Object.freeze({
  backend_api_origin: process.env.BACKEND_API_ORIGIN as string,
  node_env: process.env.NODE_ENV as "development" | "production",
});

export default _env;
