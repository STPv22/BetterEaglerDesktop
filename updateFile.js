var fs = require('fs')

fs.readFile('eaglercraftx.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(
     ` id="game_frame">`,
     ` id="game_frame">
      <script type="text/javascript src="/BetterEaglerDesktop.js"></script>`);

  fs.writeFile('eaglercraftx.html', result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
