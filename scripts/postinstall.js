import {wrapBinaryCommands} from "./wrapBinaryCommands";

Promise.all([wrapBinaryCommands()]).then(() => {
  console.log('Done settin up');
});