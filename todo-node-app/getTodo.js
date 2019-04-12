const Chalk = require("chalk");
const { LOAD_DATA, checkForTask } = require("./reusable");

const GET_TODO = (title) => {
    const data = LOAD_DATA();
    const isData = data.length > 0;
    if (isData) {
        const isTaskExists = checkForTask(title, data);
        if (isTaskExists) {
            const task = data.find(P => P.title === title);
            console.log(Chalk` {blue ${task.title}}  {blue ${task.description}}`)
            
        }
        else {
            console.log(Chalk.bold.blue(`tittle '${title}' task doesn't exist.`))
        }
    }
    else{
        console.log(Chalk.bold.gray("No Todos!"))
    }
}

module.exports = GET_TODO;