const { Post } = require('../models');

const getPosts = async (req, res) => {
  try {
    const write = await Post.findAll();
    res.status(200).json(write)
  } catch (err) {
    console.error(err);
    res.status(400).json({ message : "글 불러오기 실패"});
  }
}

const getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const write = await Post.findOne({
      where : {id}
    })
    res.json(write)
  } catch (err) {
    console.error(err);
    res.status(400).json({ message : "글 불러오기 실패"});
  }
}

const post = async (req, res) => {
  const {title, content} = req.body;

  try {
    await Post.create({
      title,
      content,
    })
    res.status(200).json({ message : "글 등록 성공"});
  } catch (err) {
    console.error(err);
    res.status(400).json({ message : "글 등록 실패"});
  }
}

const edit = async (req, res) => {
  const { title, content } = req.body;

  try {
    await Post.update({
      id : req.params.id,
      title,
      content,
      UserId : req.user.id
    })
    res.status(200).json({ message : "글 수정 성공"});
  } catch (err) {
    console.error(err);
    res.status(400).json({ message : "글 수정 실패"});
  }
}

const remove = async (req, res) => {
  const id = req.params.id;
  try {
    await Post.destroy({ where: {id}})
    res.status(200).json({ message : "글 삭제 성공"});
  } catch (err) {
    console.error(err);
    res.status(400).json({ message : "글 삭제 실패"})
  }
}


module.exports = { getPosts, getPost, post, edit, remove };