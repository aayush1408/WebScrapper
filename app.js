var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app  = express();

app.get('/scrape',function(req,res){

     url = 'http://www.imdb.com/title/tt1229340/';

    request(url,function(error,response,html){
        //res.send('Hey');
        if(!error){
            console.log('no error');
            var $ = cheerio.load(html);
            var title , release , rating;
            var json = {title:"",release:"",rating:""};
            $('.header').filter(function(){
                 var data = $(this);
                 title = data.children().first().text();
                json.title = title;
                console.log(json.title);
                console.log('rge');

            });

        }
        else{
            console.log(error);
        }
    });
});

app.listen('3000');
console.log('Magic happens here');
