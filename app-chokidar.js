const chokidar = require('chokidar')

chokidar.watch('./src').on('all', (event, path) => {
  console.log(event, path)
})
