const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'Добро пожаловать в ICH Node.js приложение!',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/api/tasks', (req, res) => {
  res.json({
    tasks: [
      {
        id: 1,
        name: 'Создание и удаление папок',
        file: 'task1.js',
        description: 'Работа с файловой системой - создание и удаление папок'
      },
      {
        id: 2,
        name: 'Запись и чтение файлов',
        file: 'task2.js',
        description: 'Работа с файлами - запись и чтение содержимого'
      }
    ]
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Что-то пошло не так!',
    message: err.message
  });
});

app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Страница не найдена',
    path: req.originalUrl
  });
});

app.listen(PORT, () => {
  console.log(` Сервер запущен на порту ${PORT}`);
  console.log(` Откройте http://localhost:${PORT} в браузере`);
  console.log(` API доступен по адресу http://localhost:${PORT}/api/tasks`);
});

module.exports = app;
