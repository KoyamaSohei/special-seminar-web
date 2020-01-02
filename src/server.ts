import Path from 'path'
import Express from 'express';

const app = Express();
app.use(Express.static(Path.join(__dirname, '.')));
app.get('*', (req, res) => {
  res.sendFile(Path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8080, '127.0.0.1', () => {
  console.log('express listening...');
})