const express = require('express');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');
const cors = require('cors');
app.use(cors());


const app = express();
app.use(bodyParser.json());

app.use('/posts', postsRoutes);

app.listen(3000 , () => {
  console.log('Servidor corriendo en http://192.168.1.51:3000');
});
