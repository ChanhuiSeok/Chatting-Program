const express = require('express') // express.js 모듈을 가져온 것
const app = express()
const port = 5000

const { User } = require("./models/User")
const bodyParser = require('body-parser')

const config = require('./config/key')

// application/x-www-form-urlencoded 라고 된 데이터를 분석해서 가져올 수 있게 한다.
app.use(bodyParser.urlencoded({extended: true}));

// application/json type의 데이터를 분석해서 가져올 수 있게 한다.
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,
   {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}
).then(() => console.log('MonogoDB Connected...'))
 .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!!!!!!'))

// 회원가입을 위한 라우트 작성 (req, res)는 콜백함수임
app.post('/register', (req, res) =>{
    // 클라이언트에서 보내는 많은 정보들을 받아온다. 가져온 것들을 데이터 베이스에 넣어준다.
    // req.body 에는 id, password: 이런 식으로 json type으로 담아온다.
    // bodyParser가 있기 때문에 request body에 들어있을 수 있고, 아래와 같이 작성 가능하다.

    const user = new User(req.body)

    // 몽고DB에서 오는 메소드, user model에 저장된다.
    // 실패 시 false와 함께 err 메세지를 클라이언트에 전달
    // 성공했으면 200(성공)과 함께 전달
    user.save((err, doc) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))