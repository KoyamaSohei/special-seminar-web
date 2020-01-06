import Path from 'path'
import Express from 'express';

const app = Express();
app.use(function(req, res, next) {
  const str = `${req.method} ${req.host} ${req.path} ${req.httpVersion}`;
  console.log(str)
  next();
});
app.use(Express.static(Path.join(__dirname, '.')));
app.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port,'0.0.0.0', () => {
  console.log(`express listening on ${port}`);
})