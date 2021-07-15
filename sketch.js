var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var form;
var form2
var title,guru;
var hero, heroin, song, movie;
var points = 0;


function preload(){
  gameback = loadImage("img/4.png")
  heroI = loadImage("img/hero2.png")
  heroinI = loadImage("img/heroin2.png")
  movieI = loadImage("img/movie2.png")
  songI = loadImage("img/song2.png")
  titleI = loadImage("img/title.png")
  guruI = loadImage("img/guru.png")
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  form = new Form()
  form2 = new Form2

  title = createSprite(displayWidth/2 + 20 , displayHeight/2 - 300)
  title.addImage(titleI)
  title.scale = 2.1;
  
  guru = createSprite(displayWidth/2 - 350 , displayHeight/2 - 100)
  guru.addImage(guruI)
  guru.scale = 1.8;
  
}


function draw(){
  background(gameback)

  textSize(15)
  stroke(204, 36, 117)
  strokeWeight(1)
  fill(204, 36, 117)
  text("Bolly coins : " + points,displayWidth/2 + 570, displayHeight/2 - 360)

  if (gameState === 0){
    form.display()
   }  
  
  if (gameState === 1){   
   form2.display()
  }
}
