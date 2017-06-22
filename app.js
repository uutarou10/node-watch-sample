const fs = require('fs')

fs.watch('./src', (eventType, fileName) => {
  switch (eventType) {
    case 'rename':
      console.log(`${fileName} is renamed!`)
      break;
    case 'change':
      console.log(`${fileName} is changed!`)
      break;
  }
})

console.log('Watching...')
