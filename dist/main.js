"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const folderName = process.argv[2];
if (fs_1.default.existsSync(folderName)) {
    const filesArray = fs_1.default.readdirSync(folderName);
    function CreateBluradImg(execString) {
        (0, child_process_1.exec)(execString, (err, stdout, stderr) => {
            if (err) {
                console.log("err:" + err.message);
                return;
            }
            if (stderr) {
                console.log("stderr:" + stderr);
                return;
            }
            console.log("stdout:" + stdout);
        });
    }
    filesArray.forEach((filename) => {
        if (fs_1.default.lstatSync(folderName + "/" + filename).isFile()) {
            if (!filename.includes("blur")) {
                const execStr = "ffmpeg -i '" +
                    folderName +
                    "/" +
                    filename +
                    "' -vf scale=20:-1 '" +
                    folderName +
                    "/" +
                    filename +
                    "-blur.jpg'";
                CreateBluradImg(execStr);
            }
        }
    });
}
else {
    console.log("dir " + folderName + " is not exists");
}
//# sourceMappingURL=main.js.map