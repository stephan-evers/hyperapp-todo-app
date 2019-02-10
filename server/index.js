
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import bodyparser from 'body-parser'

const port = process.env.PORT || 1234
const app = express()

app.use(express.static(path.join(process.cwd(), 'dist')))
app.use(morgan('dev'))
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.listen(1234, () => console.log(`Server running at http://localhost:${port}`))
