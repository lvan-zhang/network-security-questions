const ques = require('./003.js')
const fs = require('fs')


// const _ques = ques.map((item, index) => {
//   const params = {
//     question: item.question,
//     answer: item.answer,
//     options: JSON.parse(item.options),
//     analysis: item.analysis,
//   }
//   return params
// })

fs.writeFileSync('./copy-003.js', JSON.stringify(_ques), 'utf-8');