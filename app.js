var express =require('express')
var app = express()

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static('public'));

app.use(require('./routes/form'));
app.use(require('./routes/index'))


app.listen(3000, ()=>{
    console.log('Beat Burner coming soon!');
});
