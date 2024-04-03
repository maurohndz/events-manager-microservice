export const ENV_API = {
    PORT: Number(process.env.PORT) ?? 4000,
    HOST: process.env.HOST ?? 'http://localhost',
    VERSION: process.env.VERSION ?? 'v0',
    ENVIRONMENT: process.env.ENVIRONMENT ?? 'development',
};