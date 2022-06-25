const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json({strict:false}));
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(morgan('dev'));

const port = 3001;
const discussionsRouter = require('./router/discussions'); 
// TODO: /discussions 경로로 라우팅합니다. 
// 라우팅 앞에 주소 를 쳤을경우 뒤에 오는 값의 있는 애들을 참조해라
app.use('/discussions', discussionsRouter)

// TODO: 서버 상태 확인을 위해 상태 코드 200으로 응답합니다.
app.get('/', (req, res) => {
  res.sendStatus(200);
})

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | http://localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
 