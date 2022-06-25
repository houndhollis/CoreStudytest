const { agoraStatesDiscussions } = require("../repository/discussions");
const router = require("../router/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
  },
    
  findById: (req, res) => { 
    let data = discussionsData;
    if (req.params) {
      data = data.filter((ele)=>{ return ele.id === Number(req.params.id)})
      if (data.length > 0) {
        return res.status(200).json(data[0]);
      } else {
        return res.status(404).send("ID: Not found");
      }
    } else {
      return res.status(400).send("Bad request: parameter 'id' is required");
    }
  },

  createOne: (req, res) => {
    let newDiscussion = [];
    if (!req.body) {
      return res.status(400).send("No request body");
    } else if (!(req.body.id && req.body.username && req.body.title && req.body.content)) {
      return res.status(400).send("Bad request: id, username, title, content are required")
    } else {
      discussionsData.unshift(req.body);
      return res.status(201).send('Added successfully');
    }
  },

  updateById: (req, res) => {
    if (!req.body) {
      return res.status(400).send("No request body");
    }

    /* 
      왜 아래 코드 처럼 Object.assign()을 쓰면 안될까? 

        const idx = discussionsData.findIndex((ele) => ele.id === Number(req.params.id));
        const updated = Object.assign(discussionsData[idx], req.body)

      이유: id 값이 없거나 아예 존재하지 않은 경우, 값으로 undefined 또는 null이 할당되면 메소드 연산에서 오류가 발생하게 됨.

      < 에러 예제 >
      - postman PUT request: http://localhost:3001/discussions/10000
      - TypeError: Cannot convert undefined or null to object
    */

    const idx = discussionsData.findIndex((ele) => ele.id === Number(req.params.id));
    const updated = {
      ...discussionsData[idx],
      ...req.body
    };

    /* 
      그럼, 위와 같이 Spread Syntax를 사용해야 하는 이유는 무엇인가?
      : 결론적으로 Spread Syntax 문법의 기이한 결과로 인해 가능함. 

        console.log(...undefined)   // Error 
        console.log([...undefined]) // Error
        console.log({...undefined}) // {} // Work
        console.log({...undefined}) // {} // Work
    */

    if (idx !== -1) { 
      discussionsData.splice(idx, 1, updated);
      return res.status(200).send("Updated successfully");
    } else {
      return res.status(404).send("Not found");
    }
  },

  deleteById: (req, res) => {
    if (req.params) {
      const idx = discussionsData.findIndex((ele) => ele.id === Number(req.params.id));
      if (idx !== -1) {
        discussionsData.splice(idx, 1);
        return res.status(202).send("Deleted successfully");
      } else {
        return res.status(404).send("ID: Not found");
      }
    } else {
      return res.status(400).send("Bad request: parameter 'id' is required");
    } 
  },
}; 

module.exports = {
  discussionsController,
};


