const db = require('../db');

exports.getPosts = (req, res) => {
  db.query('SELECT * FROM posts', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.createPost = (req, res) => {
  const { title, content } = req.body;
  db.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, title, content });
  });
};

exports.updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ id, title, content });
  });
};

exports.deletePost = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Post eliminado' });
  });
};
