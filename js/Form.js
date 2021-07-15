class Form {

  constructor() {
    this.input = createInput("Name");
    this.play = createButton('PLAY');
    this.offline = createButton('2 Players');
    this.settings = createButton('settings');
    this.rules = createButton('rules');
  }


  display(){
    this.input.position(displayWidth/2 - 660 , displayHeight/2 - 330);

    hero = createSprite(displayWidth/2 - 115 , displayHeight/2 - 180)
    hero.addImage(heroI)
    hero.scale = 0.7;

    heroin = createSprite(displayWidth/2 + 156 , displayHeight/2 - 190)
    heroin.addImage(heroinI)
    heroin.scale = 0.66;

    song = createSprite(displayWidth/2 - 120 , displayHeight/2 - 60)
    song.addImage(songI)
    song.scale = 0.55;

    movie = createSprite(displayWidth/2 + 135 , displayHeight/2 - 80)
    movie.addImage(movieI)
    movie.scale = 0.65;

    this.play.position(displayWidth/2 - 90, displayHeight/2 + 70);
    this.play.size(210,70)
    this.play.style("fontSize","large")
   
    this.play.mousePressed(()=>{
      gameState = 1;
      this.input.hide();
      this.play.hide();
      this.offline.hide();
    })

    this.offline.position(displayWidth/2 - 50, displayHeight/2 + 160);
    this.offline.size(135,45)
    this.offline.style("textSize",100)

    this.offline.mousePressed(()=>{
      this.input.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();
    })
    
    this.settings.position(displayWidth/2 - 100, displayHeight/2 + 330)
    this.settings.size(60,40)
    this.settings.style("textSize",20)

    this.settings.mousePressed(()=>{
      this.input.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();
    })

    this.rules.position(displayWidth/2 + 100, displayHeight/2 + 330);
    this.rules.size(60,40)
    this.rules.style("textSize",20)

    this.rules.mousePressed(()=>{
      this.input.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();
      hero.destroy()
    })


    line(displayWidth/2, displayHeight/2 - 230, displayWidth/2, displayHeight/2)
    line(displayWidth/2 - 280, displayHeight/2 - 120, displayWidth/2 + 320, displayHeight/2 - 120)

    drawSprites();
  }
}
