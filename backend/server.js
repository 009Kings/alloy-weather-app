const express = require('express')
const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
  res.send('testing')
})

app.listen(
  PORT, 
  () => console.log(`🎧 You're listening to the smooths sounds of port ${PORT} 🎧`)
)