import config from "config"
import express from " express"

const app = express()

const PORT = config.get("PORT")  || 6000
console.log(PORT);