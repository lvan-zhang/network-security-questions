const ques = require('./003.js')
const word1 = require('./word1.js')
const word2 = require('./word2.js')
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

function extractQuestions(text) {  
  const questions = [];  

  // 正则表达式解释：  
  // 1. 问题编号和问题名称  
  // 2. 匹配选项（A. 到 D. 开头的行）  
  // 3. 匹配正确答案（以“正确答案:”开头，后跟一个或多个大写字母）  
  const regex = /问题 (\d+)\s+([\s\S]*?)(?:(?:A\. .*?\r?\n|B\. .*?\r?\n|C\. .*?\r?\n|D\. .*?\r?\n|E\. .*?\r?\n|F\. .*?\r?\n|G\. .*?\r?\n|H\. .*?\r?\n|I\. .*?\r?\n)+)正确答案: ([ABCDEFGHI]+)/g;  

  let match;  
  while ((match = regex.exec(text)) !== null) {  
      const questionNumber = match[1];  
      const questionName = match[2].trim(); // 去除问题名称前后的空白字符  
      const options = [];  
      let currentOption;  

      // 由于正则表达式无法直接捕获所有选项作为单独捕获组，我们在这里手动收集它们  
      let optionRegex = /(?:A\. (.*?)\r?\n|B\. (.*?)\r?\n|C\. (.*?)\r?\n|D\. (.*?)\r?\n|E\. (.*?)\r?\n|F\. (.*?)\r?\n|G\. (.*?)\r?\n|H\. (.*?)\r?\n|I\. (.*?)\r?\n)/g;  
      let optionMatch;  
      while ((optionMatch = optionRegex.exec(match[0])) !== null) {  
          // 清理匹配结果，只保留非空选项  
          currentOption = optionMatch.find(o => o !== undefined && o.trim() !== '');  
          if (currentOption) {  
              options.push(currentOption.trim());  
          }  
      }  

      const correctAnswer = match[3];  

      questions.push({  
          questionNumber,
          question: questionName,  
          options: options.map(item => ({
            Key: item[0],
            Value: item.slice(2)
          })),
          answer: correctAnswer,
          qtype: correctAnswer.length > 1 ? '2' : '1'
      });  

      // 重置 optionRegex 的 lastIndex，因为我们在循环中多次调用了它  
      optionRegex.lastIndex = 0;  
  }  

  return questions;  
}

// fs.writeFileSync('./short-003.js', `export default ${JSON.stringify(_ques)}`, 'utf-8');
// fs.writeFileSync('./short-004.js', `export default ${JSON.stringify(extractQuestions(word1))}`, 'utf-8');
fs.writeFileSync('./short-005.js', `export default ${JSON.stringify(extractQuestions(word2))}`, 'utf-8');