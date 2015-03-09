var app = require('vbridge');
var h = app.h;

var state = app.state({
  img: '/test-img.jpg'
});

app(document.body, state, function render(state) {
  return h('img.full', { src: state.get('img') });
  //return h('h1', 'Hello World');
});

// socket client
var io = require('socket.io-client')(window.location.href);

io.on('img', function(imgUrl) {
  console.log(imgUrl);
  state.set('img', imgUrl);
});

