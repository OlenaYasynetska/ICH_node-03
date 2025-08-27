const fs = require("fs");

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.error("Ошибка при создании папки:", err);
  } else {
    console.log("Папка myFolder успешно создана.");

    fs.rmdir("myFolder", (err) => {
      if (err) {
        console.error("Ошибка при удалении папки:", err);
      } else {
        console.log("Папка myFolder успешно удалена.");
      }
    });
  }
});