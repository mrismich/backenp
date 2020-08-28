let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;
const uri = "mongodb+srv://admin:admin123!@clusterschematicproject.yuwsa.mongodb.net/<SchematicProject_db>?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});




// Set up express js port
const SD_SERVICES_SIZE = require('./routes/services_Size.route')
const SD_SERVICES = require('./routes/services_route')
const SD_PIPES = require('./routes/pipes_route');
const SD_COMPONENTS = require('./routes/component_route');
const SD_PROJECTS = require('./routes/projects_route');
const SD_PROJECTS_REV = require('./routes/project_rev_route');
const SD_PROJECTS_OBJ = require('./routes/project_object_route');
const SD_PROJECTS_NOTES = require('./routes/notes_route');
const SD_PROJECTS_SHEET = require('./routes/sheet_route');
const SD_PROJECTS_MECH = require('./routes/mech_route');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));


// RESTful API root
app.use('/api', SD_SERVICES_SIZE)
app.use('/api',SD_SERVICES);
app.use('/api',SD_PIPES);
app.use('/api',SD_COMPONENTS);
app.use('/api',SD_PROJECTS);
app.use('/api',SD_PROJECTS_REV);
app.use('/api',SD_PROJECTS_OBJ);
app.use('/api',SD_PROJECTS_NOTES);
app.use('/api',SD_PROJECTS_SHEET);
app.use('/api',SD_PROJECTS_MECH);


// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular8-meanstack-angular-material/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
