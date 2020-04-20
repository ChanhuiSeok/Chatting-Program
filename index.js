const express = require('express') // express.js 모듈을 가져온 것
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:8PK3EhnwZS@chatting0-naz8i.mongodb.net/test?retryWrites=true&w=majority',
   {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}
).then(() => console.log('MonogoDB Connected...'))
 .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))