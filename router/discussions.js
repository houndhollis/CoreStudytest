// TODO: discussions 라우터를 완성합니다.\
const { discussionsController } = require('../controller');
const { findAll, findById, createOne, updateById, deleteById } = discussionsController;
const express = require('express');
const router = express.Router(); // 필수 

// 로컬호스트/ http://localhost:3001/discussions/
// TODO: 모든 discussion 목록을 조회하는 라우터를 작성합니다.
router.get('/',findAll);

// TODO: discussion 하나를 조회하는 라우터를 작성합니다.
router.get('/:id',findById);

// ADVANCED: discussion 하나를 생성하는 라우터를 작성합니다.
router.post('/',createOne);

// ADVANCED: discussion 하나를 수정하는 라우터를 작성합니다.
router.put('/:id',updateById);
// 하나를 수정해야 하기 때문에 고유한 값이 id를 사용하는게 좋겠다. 

// ADVANCED: discussion 하나를 삭제하는 라우터를 작성합니다.
router.delete('/:id',deleteById);
// id는 고유한 값이니깐 '/' 로 찾게되면 모든 값이 나오기 때문에 고유한 값인 id 를 찾아야 한다.  

module.exports = router;

// CRUD 
// Create : post
// Read : get
// Create : update
// Delete : Delete
