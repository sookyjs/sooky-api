import express from "express"
import bodyParser from "body-parser"
import session from "client-sessions"
import cookieParser from "cookie-parser"
import cors from "cors"
import morgan from "morgan"

import config from "../config/index.js"

export default async ({ expressApp }) => {
  expressApp.enable("trust proxy")

  expressApp.use(cors())
  expressApp.use(
    morgan("combined", {
      skip: () => process.env.NODE_ENV === "test",
    })
  )
  expressApp.use(cookieParser())
  expressApp.use(bodyParser.json())
  expressApp.use(
    session({
      cookieName: "session",
      secret: config.cookieSecret,
      duration: 24 * 60 * 60 * 1000,
      activeDuration: 1000 * 60 * 5,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    })
  )

  expressApp.get("/health", (req, res) => {
    res.status(200).send("OK")
  })

  return expressApp;
}