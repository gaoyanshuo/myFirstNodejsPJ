var express = require('express');
const formidable = require('formidable');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// file upload
router.get('/fileupload', (req, res, next) => {
  res.render('fileupload');
});

// file upload
router.post('/fileupload', (req, res, next) => {
  // 创建form对象
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/../public/images',
    keepExtensions: true,
  });
  // 请求解析报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    //  fields 存储的是除文件上传以外的字段 (text, radio, checkbox, select)
    console.log('fields', fields);
    //  files 存储的是文件上传类型
    console.log('files', files);
    // 将此数据保存在DB
    let imageUrl = `/images/${files.file.newFilename}`;
    res.send(imageUrl);
    // res.json({ fields, files });
  });
});

module.exports = router;
