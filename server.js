// 
var http = require('http');
var ecstatic = require('ecstatic');
var cfg = require('./config.json');
var tw = require('node-tweet-stream')(cfg);
var server = http.createServer(
  ecstatic('public', function(req, res) {
    fs.createReadStream('public/index.html').pipe(res);
  })
);

var io = require('socket.io').listen(server);

server.listen(process.env.PORT || 3000);

tw.track('#photo');
tw.on('tweet', function(tweet){
  if (tweet.entities.media) {
    io.emit('img', tweet.entities.media[0].media_url);
  }
});

// setTimeout(function() {
//   io.emit('img', '/test2-img.jpg');
//   console.log('sent image');
// }, 10000);