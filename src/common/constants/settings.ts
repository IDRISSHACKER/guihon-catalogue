import { load } from 'ts-dotenv';

const env = load({
  APP_NAME: String,
  PROD: Boolean,
  PORT: Number,
  DB: String,
  DB_TEST: String,
  STORAGE_DIR: String,
});

export default env;
