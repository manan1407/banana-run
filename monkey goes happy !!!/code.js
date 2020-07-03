var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","730b35f0-8240-46a5-a6da-b4e024b34cb6","11277efc-4eba-4a5d-8ea6-372784f4f6d6"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":3,"version":"Erv27joGcOJdcEFomxW4olD5VuT8QWX6","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"VJ72i9kLyCcw_Ll2nX7mFMDYvCm9qRaj","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"aq_KdKLuH6yFcpuFCFQCOR22yxbp9SIM","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"730b35f0-8240-46a5-a6da-b4e024b34cb6":{"name":"meadow_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PBJke0OcZeBcSCZ4Jf1odHo4h3du1gOK/category_backgrounds/meadow.png"},"11277efc-4eba-4a5d-8ea6-372784f4f6d6":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var gamestate = "play";

//create a ground sprite
var ground = createSprite(200,370,400,20);
ground.x = ground.width /4;
ground.vsible = false;

var land = createSprite(200,200,400,400);
land.setAnimation("meadow_1");

var monkey = createSprite(100,300,10,10);
monkey.setAnimation("monkey");
monkey.scale = 0.15;
monkey.setCollider("circle",0,0,100);

var bananagroup = createGroup();

var stonegroup = createGroup();

var score = 0;

var gameover = createSprite(200,200,10,10);
gameover.setAnimation("textGameOver_1");
gameover.visible = false; 
gameover.scale = 0.8;



function draw() {
  
   monkey.collide(ground);
   
    ground.velocityX = -(17);
  background("white");
 drawSprites();
 
 text
 textSize(20);
 text("score = " + score,300,60);
 
  
  if(keyDown(UP_ARROW)){
    monkey.velocityY = -10;
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(gamestate === "play"){
      
  if(World.frameCount % 80 === 0){
      var rand = randomNumber(1,2);
      if(rand === 1){
        var banana = createSprite(410,257,10,10);
        banana.setAnimation("Banana");
        banana.scale = 0.1;
        banana.y = randomNumber(220,50);
        banana.velocityX = -8;
        bananagroup.add(banana);
        bananagroup.setLifetimeEach(130);
      }
      
      if(rand === 2){
        var stone = createSprite(410,350,10,10);
        stone.setAnimation("Stone");
        stone.scale = 0.2;
        stone.y = randomNumber(350,350);
        stone.velocityX = -8;
        stonegroup.add(stone);
        stonegroup.setLifetimeEach(130);
      }
    }
    }
    
    if(bananagroup.isTouching(monkey) && gamestate === "play"){
      score = score + 1;
      bananagroup.setVisibleEach(false);
      
    }
    
    if(stonegroup.isTouching(monkey) && gamestate === "play"){
      monkey.visible = false;
      gameover.visible = true;
      score = 0;
      gamestate = "end";
      playSound("assets/category_explosion/8bit_explosion.mp3");
    }
    
    if(gamestate === "end"){
    stonegroup.setVisibleEach(false);
    bananagroup.setVisibleEach(false);
    }
    
    if(keyDown("space") && gamestate === "end"){
      gamestate = "play";
      monkey.visible = true;
      gameover.visible = false;
    }
  
 
   monkey.velocityY = monkey.velocityY + 0.5;
}




    

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
