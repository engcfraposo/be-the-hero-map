const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./src/routes');

const app = express();


mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-ub5tj.gcp.mongodb.net/bethehero?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001);