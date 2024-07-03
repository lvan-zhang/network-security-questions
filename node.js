const ques = require('./003.js')
const fs = require('fs')

const getDefault = (qtype) => {
  switch (qtype) {
    case '1':
      return ''
    case '2':
      return []
    case '3':
      return ''
  }
}
const _ques = ques.map((item, index) => {
  const params = {
    question: item.question,
    answer: item.answer,
    options: JSON.parse(item.options),
    analysis: item.analysis,
    qtype: item.qtype,
    correct: getDefault(item.qtype)
  }
  return params
})

fs.writeFileSync('./short-003.js', `export default ${JSON.stringify(_ques)}`, 'utf-8');