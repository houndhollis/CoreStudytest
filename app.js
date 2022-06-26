const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다.
app.use(cors()) // 모든 사이트 적용 use 사용임을 잊지 말자!!
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
// app.use(express.json({strict:false}))
// true 면 객체 또는 배열만 허용, false 면 전부? 허용, ++ 모든 JOSN.parse 에 접근가능,
//JSON.parse = 객체를 JSON으로 변환,  

// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(morgan('tiny'))

const port = 3001;
const discussionsRouter = require('./router/discussions'); 
// TODO: /discussions 경로로 라우팅합니다. 
// 라우팅 앞에 주소 를 쳤을경우 뒤에 오는 값의 있는 애들을 참조해라
app.use('/discussions',discussionsRouter) 
// 처음엔 app.get 으로 했으나 postman에서 응답을 받지 못함. 계속 로딩만,,
// use를 머리속으로 다시 정리할 필요성을 느낌 . 

  // TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
app.get('/',(req,res) =>{
  res.status(200).send('성공!')
})


const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
 