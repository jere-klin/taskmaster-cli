const { readTasks } = requiere ('./task');
const [,, cmd]= process.argv;

if (!cmd){
    console.log('TasKMaster CLI- usa: node index.js <comando>');
}
