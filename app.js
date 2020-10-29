var express = require('express')
var app = express()
var bodyParser  = require("body-parser")
var port = 3000

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// Music API - https://www.npmjs.com/package/musicplayer-api
// Player = require('musicplayer-api').MusicPlayer;

//Creating ubject of new player
// player = new Player();

//Adding new track in the playlist
// player.addTrack; './Kyon.mp3';


app.get('/', (req, res) => {
    res.redirect("/input");
    res.send("Hello World!");
    //Play the song and console log the volume
    // player.play();
    // console.log(player.getVolume());
});

app.get("/input", function(req,res){
    res.render("input");
})

app.post("/input", function(req,res){
    var dis = req.body.distance;
    if(dis>5){
        var instructions = {
            isMuted : false,
            volume : 50, //player.getVolume()
            isPaused : false, //player.pause()
            songPosition : 40, //player.getSongPosition()
            increaseBrightness : false,
            message : "You are at a safe distance!"
        }
        res.send(instructions);
    }else{
        var instructions = {
            isMuted : true,
            volume : 50, //player.getVolume()
            isPaused : true, //player.pause()
            songPosition : 40, //player.getSongPosition()
            increaseBrightness : true,
            message : "There is a car nearby. Drive Safely!"
        }
        res.send(instructions);
    }
})

app.listen(port, () => console.log(`Sever is started!`))