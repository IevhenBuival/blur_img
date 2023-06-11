import { exec } from "child_process";
import fs from "fs";

const folderName: string = process.argv[2];

if (fs.existsSync(folderName)) {
  const filesArray = fs.readdirSync(folderName);

  function CreateBluradImg(execString: string) {
    exec(execString, (err, stdout, stderr) => {
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
    if (fs.lstatSync(folderName + "/" + filename).isFile()) {
      if (!filename.includes("blur")) {
        const execStr =
          "ffmpeg -i '" +
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
} else {
  console.log("dir " + folderName + " is not exists");
}
