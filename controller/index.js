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
    // list 에 discussionsData 중 req.params.id 와 일치하는 데이터를 필터링 한다.
    if(list.length > 0){
      // list 가 있는경우, 생각해보니 빈 배열도 있는거니깐 이 조건문은 무조건 200이 호출될 것같다. 존재하는 경우가 아니라 길이가 있는 경우가 더 맞는것 같아서 수정한다. 
      return res.status(200).json(list)
    }
    else{
     throw res.status(404)
    }
  },
  createOne: (req, res) => {
    console.log(req.body)
      discussionsData.unshift(req.body) // 요청한 응답을 discussionsData 의 제일 앞으로 넘겨준다.
      res.status(200).json(discussionsData) // 새로운 데이터가 들어간 discussionsData를 보내준다.
  },

  updateById: (req, res) => {
 // Delete 랑 비슷한 느낌. 스프레드 연산자를 사용하고,splice로 변경해주면 될꺼같다.
 // findIndex 로 요청의 아이디와 discussions의 아이디와 일치하는 인덱스 번호를 먼저 찾고,
 // filter 를 써서 요청과 같은 아이디의 데이터를 찾은다음(newData)
 // discussionsData에 splice()를 쓰는데,, 시작은 findIndex 로 하고, 추가할 인자값으로 
 // ...req.body, ...newData 를 해주면 
 // discussionsData 가 변경되고 변경된 discussionsData 를 보내주면 될 꺼같다. 

    const updateId = discussionsData.findIndex(el => el.id === Number(req.params.id))
    // 요청의 아이디와 discussionsData의 아이디와 일치하는 인덱스 번호를 할당
    const updateItem = discussionsData.filter(el => el.id === Number(req.params.id))
    // 요청의 아이디와 discussionsData의 아이디와 일치하는 데이터를 할당
    discussionsData.splice(updateId,1,...req.body)
    // splice 로 원본배열을 변경시켜 줄 건데, 시작지점은 아이디가 일치하는 인덱스 부터 시작하고,
    // 요청으로 온 body를 스프레드 연산자를 사용해서 풀어주고, 그 다음 인자로
    // 아이디와 일치하는 데이터를 풀어서 써주면 스프레드 연산자에 의해 변경된 데이터는 
    // 변경된 데이터는 앞에있는 req.body 값으로 재할당? 된다. 

    res.status(200).json(discussionsData)
  },

  deleteById: (req, res) => {
    // 첫째로 discussionsData 에 요청으로 온 데이터와 일치하는 인덱스 번호를 찾는다.
    // 둘째로 일치하는 discussions 에서 일치하는 요소를 splice를 써서 잘라낸다.
    const deleteItem = discussionsData.findIndex(el => el.id === Number(req.params.id))
    // discussionsData에서 요청의 아이디와 일치하는 데이터의 인덱스 번호를 변수에 할당
    discussionsData.splice(deleteItem,1)
    // splice 메서드는 원본배열에 변경을 만듬, 요청의 아이디의 인덱스 번호인 deleteItem 을 첫번째 인자값으로 주고 두번째 인자값은 몇개를 삭제할지 정해준다. ( 1개 )

      res.status(200).json(discussionsData) // 변경된 discussionsData를 보내준다. 
  },
}; 


module.exports = {
  discussionsController,
};


