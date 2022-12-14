const {
  REDIS_PORT = 6379,
  REDIS_HOST = process.env.ENV === "production" ? "cache" : "localhost",
} = process.env

export const REDIS_OPTIONS = {
  port: +REDIS_PORT,
  host: REDIS_HOST,
}
