import express from "express";
import { engine } from 'express-handlebars';
import { createServer } from "http";
import { Server } from "socket.io"; // sockets not used
import { runShortcut} from './functions/execute.js';
import { getFileNamesFromDirectory } from './functions/getFilesFromDirectory.js';
import chalk from 'chalk';
import os from 'node:os'; 
const log = console.log;

const app = express();
app.use(express.static('dist'));

// html templating handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './dist/views');

const port = 3000;
const httpServer = createServer(app);

// Web Sockets 
// const io = new Server(httpServer, { /* options */ });
// io.on("connection", (socket) => {
//   // ...
// });

const fileNamesFromShorcutsFolder = await getFileNamesFromDirectory();

let data = fileNamesFromShorcutsFolder;

console.log(await getFileNamesFromDirectory());

app.get('/', (req, res) => {
  res.render('index', { data: data, layout: false })
})

app.get('/home', (req, res) => {
  res.render('index', { data: data, layout: false })
})

app.get('/run/:name', function (req, res) {
    // console.log('called fileName: ' + req.params.name);
    res.status(200).json({"success": true});
    runShortcut(`${req.params.name}`)
})

httpServer.listen(port, () => {
  log(chalk.yellow.bold(`Connect to the controller on local network http://${os.hostname().toLowerCase()}:${port}`))
});


