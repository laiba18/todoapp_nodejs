const Chalk = require("chalk");
const {LOAD_DATA, checkForTask, SAVE_DATA} = require("./reusable");

const DELETE_TODO = (title) => {
        const data = LOAD_DATA();
        const isTaskExists = checkForTask(title, data)
        if(isTaskExists){
            const delTask = data.filter(p => p.title !== title);
            console.log(Chalk.black.bgBlue("Task deleted!"))
            SAVE_DATA(delTask);
        }
        else{
            console.log(Chalk.bold.bgBlue(`Tittle '${title}' task doesn't exist.`))
        }
}
module.exports = DELETE_TODO;