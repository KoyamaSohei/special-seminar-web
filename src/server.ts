import Path from 'path'
import Express from 'express';

const app = Express();
app.use(Express.static(Path.join(__dirname, '.')));
app.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`express listening on ${port}`);
})