import {load} from "ts-dotenv"

const env = load({
    APP_NAME: String,
    PROD: Boolean,
    PORT: Number,
    DB: String
})

export default env
