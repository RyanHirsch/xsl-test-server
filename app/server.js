var express = require('express'),
  app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(require('grunt-contrib-livereload/lib/utils').livereloadSnippet);
});

app.get('/',function(req,res){
  res.render('index', {
    pageTitle:'Simple Express 3 and Jade example'
  });
});

app.get('/api',function(req,res){
  res.send('Hello World');
});


app.listen(3000);