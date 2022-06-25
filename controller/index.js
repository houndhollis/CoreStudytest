const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // find 사용해보기
    // id 받아올때 문자열이니까 Number 타입으로 형변환 해주기
    const data = discussionsData.find((el) => el.id === Number(req.params.id)); // req.params.id -> id 안해주면 안됨!
    if (data === undefined) {
      throw res.status(400).json("id가 없다!");
    } else {
      return res.status(200).json(data);
    }
  },
  createOne: (req, res) => {
    // router.post("/", createOne);
    // unshift로 데이터 맨 앞에 추가해보기
    // req.body 를 unshift 하기 -> 기존 데이터에
    // postman에서 json으로 읽어야함! (text 안댕)
    res.status(200).json(discussionsData.unshift(req.body));
  },

  updateById: (req, res) => {
    // 1. 아이디 찾기
    // 2. 아이디 해당하는 인덱스 찾기 => 삭제 할 인덱스 찾기 => splice 사용
    // 3. 업데이트 할 내용 => req.body 에서 가져왕
    // 4. splice에 삭제할 위치(idx), 내용 넣어주기

    const filterId = discussionsData.filter(
      (el) => el.id === Number(req.params.id)
    );
    const findIdx = discussionsData.findIndex((el) => el.id === filterId[0].id);
    const update = {
      ...filterId[0],
      ...req.body,
    };

    res.status(200).json(discussionsData.splice(findIdx, 1, update));
  },

  deleteById: (req, res) => {
    // 같은 아이디 찾아서 삭제하기
    // splice(삭제할 idx, 1)
    // findIdx로 인덱스 찾기
    const deleteId = discussionsData.findIndex(
      (el) => el.id === Number(req.params.id)
    );
    discussionsData.splice(deleteId, 1);
    res.status(200).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
