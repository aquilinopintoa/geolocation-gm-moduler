import routes from './routes';

const morgan = require('morgan');
const express = require('express');

const app = express();

app.use(express.json());
app.use(morgan('dev')); // dev seems to be the best option for the console
app.use(express.urlencoded({ extended: false }));

/** successful flow: router => response || NotFound */
app.use(routes);

// error response handler
app.use((err: any, req: any, res: any) => {
    console.log(err)
    res.send('error')
});

export default app;