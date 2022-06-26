const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
  },
    
  findById: (req, res) => { 
    let list = discussionsData

    list = list.filter(el => {
      return el.id === Number(req.params.id)
    })

    if(list.length > 0){
      return res.status(200).json(list)
    }
    else{
     throw res.status(404)
    }
  },
  createOne: (req, res) => {

  },

  updateById: (req, res) => {

  },

  deleteById: (req, res) => {

  },
}; 


module.exports = {
  discussionsController,
};


