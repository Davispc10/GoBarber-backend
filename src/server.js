import app from './app';
require('sucrase/register');

app.listen(process.env.PORT || 3334);
