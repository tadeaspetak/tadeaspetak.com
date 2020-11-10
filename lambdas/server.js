'use strict'
const express = require('express')
const serverless = require('serverless-http')
const app = express()
const bodyParser = require('body-parser')

const router = express.Router()
router.get('/donna-redirect', (req, res) => {
  res.redirect('ms-word:ofv|u|https://tadeaspetak.com/welcome-back.docx')
})
router.get('/donna-redirect-escape', (req, res) => {
  res.redirect('ms-word:ofv%7Cu%7Chttps://tadeaspetak.com/welcome-back.docx')
})
router.get('/donna-redirect-quote', (req, res) => {
  res.redirect('ms-word:ofv|u|\'https://tadeaspetak.com/welcome-back.docx\'')
})
router.get('/another', (req, res) => res.json({ route: req.originalUrl }))

app.use(bodyParser.json())
app.use('/.netlify/functions/server', router) // path must route to lambda

module.exports = app
module.exports.handler = serverless(app)
