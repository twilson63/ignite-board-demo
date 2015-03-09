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

tw.track('#' + process.argv[2]);
tw.on('tweet', function(tweet){
  if (tweet.entities.media) {
    io.emit('img', tweet.entities.media[0].media_url);
  }
});