import dotenv from 'dotenv';
const envFile = `./env-files/.env.${process.env.TEST_ENV || 'qa'}`;
const result = dotenv.config({
  path: envFile
});

if (result.error) {
  throw new Error(`Unable to load environment file: ${envFile}`);
}

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing environment variable: ${name} in ${envFile}`
    );
  }
  return value;
}

export const env = {
  baseUrl: getEnv('BASE_URL'),
  username: getEnv('AUTH_USERNAME'),
  password: getEnv('AUTH_PASSWORD'),
};