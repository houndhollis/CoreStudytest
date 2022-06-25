const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

module.exports.agoraStatesDiscussions = [
  { 
    id:12,
    username:'woong',
    title:'너무힘들어',
    content: '다신안해 더미데이터 수정',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:11,
    username:'hyeon jun',
    title:'코어스터디',
    content: '잘부탁해요!',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:10,
    username:'minjun',
    title:'Ux/UI',
    content: '강의합니다',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:9,
    username:'soo Jung',
    title:'나는...',
    content: '비전공자이지만 열심히 하겠습니다! ^^',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:8,
    username:'Ji chang',
    title:'다래끼정벌',
    content: '으악 양쪽눈에났다!',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:7,
    username:'Ja hyeon',
    title:'배캠 틀었어요',
    content: '모각코가 망했네...',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:6,
    username:'soo in',
    title:'애플 사세요',
    content: '돈다날렸다. 힝',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:5,
    username:'seok',
    title:'가족여행',
    content: '비와서 취소됨',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:4,
    username:'kang',
    title:'쇼핑했다',
    content: '캉골로 도배',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:3,
    username:'soobin',
    title:'오늘은 쉬는날~',
    content: 'xx 사장한테 전화와서 알바감.',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:2,
    username:'min woo',
    title:'핑크빈사냥',
    content: '하다가 지쳐서 배그했다 ㅋ',
    createdAt: new Date().toLocaleString()
  },
  { 
    id:1,
    username:'Jang jin',
    title:'개구리사냥',
    content: '숑숑',
    createdAt: new Date().toLocaleString()
  },
]
