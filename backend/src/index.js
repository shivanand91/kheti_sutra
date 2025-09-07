import app from './app.js'
import connectDB from './db/db.js'


const port = process.env.PORT || 4000

app.listen(port, () => {
    connectDB()
    console.log(`Server is listening on port ${port}`)
})