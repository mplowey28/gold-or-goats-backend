import app from './app'

const PORT: number = 9090 || process.env.PORT

app.listen(PORT, (): void => {
  console.log('server is running successfully at', PORT)
})
