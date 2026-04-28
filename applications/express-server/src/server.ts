import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.use("members/list", (req, res) => {
  res.send("List of members")
})

app.use("members/add", (req, res) => {
  res.send("Add a member")
})

app.listen(PORT, (error) => {
  if (error) {
    console.error('Error starting server:', error)
  } else {
    console.log(`Server is running on http://localhost:${PORT}`)
  }
});

export default app