const fs = require("fs");

fs.readFile("datos.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
        return;
    }

    console.log(data);
});