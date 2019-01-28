const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static('public'));

app.use(require('./routes/register'));
app.use(require('./routes/login'));
app.use(require('./routes/dashboard'));
app.use(require('./routes/logout'));



app.listen(3000, ()=>{
    console.log('Beat Burner coming soon!');
});