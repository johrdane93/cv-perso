// gestion du volume

// var video = document.getElementById('vidbgrd');
// var volu = document.getElementById('ctrlCirce');
// setInterval(function(){
//   var x = volu.attributes[1].value;
//   var y = x / 261.2;
//   if( y !== video.volume ){
//     if ( y < 0.05 ) {
//       video.volume = 0;
//     } else {
//       video.volume = y;
//     }
//   }
// }, 100)


// SkillGraph
ivalue = 1
var trois = [
  {"header" : "INTERESTS",
  "captions" : [
    "Cooking",
    "Web",
    "Mobile",
  ],
  "values" : [
    0.70,
    0.90,
    0.70,

  ]
}
]

var deux =
[
  {"header" : "MISC",
    "captions" : [
      "Eclipse",
      "Git",
      "Rails",
      "OpenGL",
      "Linux"
    ],
    "values" : [
      0.85,
      0.85,
      0.75,
      0.60,
      0.80
    ]
  }
]

var un = [
  {"header" : "LANGUAGES",
      "captions" : [
        "nodeJS",
        "PHP",
        "JS",
        "Ruby",
        "Java"
      ],
      "values" : [
        0.80,
        0.85,
        0.90,
        0.70,
        0.90
      ]
    }
]
// var skills = [
//   {"header" : "INTERESTS",
//     "captions" : [
//       "Cooking",
//       "Web",
//       "Mobile",
//       "Design",
//       "AI"
//     ],
//     "values" : [
//       0.70,
//       0.90,
//       0.70,
//       0.80,
//       0.70
//     ]
//   },
//   {"header" : "LANGUAGES",
//     "captions" : [
//       "nodeJS",
//       "PHP",
//       "JS",
//       "Ruby",
//       "Java"
//     ],
//     "values" : [
//       0.80,
//       0.85,
//       0.90,
//       0.70,
//       0.90
//     ]
//   },
//   {"header" : "MISC",
//     "captions" : [
//       "Eclipse",
//       "Git",
//       "Rails",
//       "OpenGL",
//       "Linux"
//     ],
//     "values" : [
//       0.85,
//       0.85,
//       0.75,
//       0.60,
//       0.80
//     ]
//   }
// ];
function skillGraph( skills, cibleString, numbColor ){
  console.log(skills)
  var pentagonIndex = 0;
  var valueIndex = 0;
  var width = 0;
  var height = 0;
  var radOffset = Math.PI/2
  var sides = skills[0].captions.length; // Number of sides in the polygon
  var theta = 2 * Math.PI/sides; // radians per section

  function getXY(i, radius) {
    return {"x": Math.cos(radOffset +theta * i) * radius*width + width/2,
    "y": Math.sin(radOffset +theta * i) * radius*height + height/2};
  }

  var hue = [];
  var hueOffset = numbColor;

  for (var s in skills) {
    $( cibleString ).append('<div class="pentagon" id="interests"><div class="header"></div><canvas class="pentCanvas"/></div>');
    // hue[s] = ( hueOffset + s * 255/skills.length) % 255;
  }
for( var i = 0; i<skills[0].captions.length; i++ ){
  hue[i] = ( hueOffset + i * 255/skills[0].captions.length) % 255;
}
  // $(".pentagon").append('<div class="col-md-3"</div>');

  $( cibleString ).find(".pentagon").each(function(index){
    width = $(this).width();
    height = $(this).height();
    var ctx = $(this).find('canvas')[0].getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.font="15px Monospace";
    ctx.textAlign="center";

    /*** LABEL ***/
    color = "hsl("+ hue[pentagonIndex]+ ", 100%, 50%)";
    ctx.fillStyle = color;
    ctx.fillText( skills[pentagonIndex].header, width/2, 15);

    ctx.font="13px Monospace";
/* 43 65 100 */
    /*** PENTAGON BACKGROUND ***/
    for (var i = 0; i < sides; i++) {
      // For each side, draw two segments: the side, and the radius
      ctx.beginPath();
      xy = getXY(i, 0.3);
      colorJitter = 25 + theta*i*2;
      color = "hsl("+hue[pentagonIndex]+",100%," + colorJitter + "%)";
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.moveTo(0.5*width, 0.5*height); //center
      ctx.lineTo(xy.x, xy.y);
      xy = getXY(i+1, 0.3);
      ctx.lineTo(xy.x, xy.y);
      xy = getXY(i, 0.37);
      console.log();
      ctx.fillText( skills[ pentagonIndex].captions[valueIndex],xy.x, xy.y +5 );
      valueIndex++;
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    valueIndex = 0;
    ctx.beginPath();
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
    ctx.lineWidth = 5;
    var value = skills[pentagonIndex].values[valueIndex];
    xy = getXY(i, value * 0.3);
    ctx.moveTo(xy.x,xy.y);
    /*** SKILL GRAPH ***/
    for (var i = 0; i < sides; i++) {
      xy = getXY(i, value * 0.3);
      ctx.lineTo(xy.x,xy.y);
      valueIndex++;
      value = skills[pentagonIndex].values[valueIndex];
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    valueIndex = 0;
    pentagonIndex++;
    console.log('iteration : ' + ivalue)
    ivalue++
/*-------------------------------------*/
  });
}
skillGraph( un, "#skillgraph00", 126 )
skillGraph( deux, "#skillgraph01", 250 )
skillGraph( trois, "#skillgraph02", 300 )
// var canvas = document.getElementById('snow'),
//     // partEcran = document.body.offsetWidth/4*3,
//     ctx = canvas.getContext('2d'),
//     width = ctx.canvas.width = document.body.offsetWidth,
//     height = ctx.canvas.height = document.body.offsetHeight,
//     animFrame = window.requestAnimationFrame ||
//                 window.mozRequestAnimationFrame ||
//                 window.webkitRequestAnimationFrame ||
//                 window.msRequestAnimationFrame,
//     snowflakes = [];
//     // console.log(partEcran)
//
//
// window.onresize = function() {
//   width = ctx.canvas.width = document.body.offsetWidth,
//     height = ctx.canvas.height = document.body.offsetHeight;
// }
//
// function update() {
//   for (var i = 0; i < snowflakes.length; i++) {
//     snowflakes[i].update();
//   }
// }
//
// function Snow() {
//   this.x = random(0, width);
//   this.y = random(-height, 0);
//   this.radius = random(0.5, 3.0);
//   this.speed = random(1, 3);
//   this.wind = random(-0.5, 3.0);
// }
//
// Snow.prototype.draw = function() {
//   ctx.beginPath();
//   ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//   ctx.fillStyle = '#fff';
//   ctx.fill();
//   ctx.closePath();
// }
//
// Snow.prototype.update = function() {
//   this.y += this.speed;
//   this.x += this.wind;
//
//   if (this.y > ctx.canvas.height) {
//     this.y = 0;
//     this.x = random(0, width);
//   }
// }
//
// function createSnow(count) {
//   for (var i = 0; i < count; i++) {
//     snowflakes[i] = new Snow();
//   }
// }
//
// function draw() {
//   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//   for (var i = 0; i < snowflakes.length; i++) {
//     snowflakes[i].draw();
//   }
// }
//
// function loop() {
//   draw();
//   update();
//   animFrame(loop);
// }
//
// function random(min, max) {
//   var rand = (min + Math.random() * (max - min)).toFixed(1);
//   rand = Math.round(rand);
//   return rand;
// }
//
// createSnow(25);
// loop();
//
// // Background Creation
//
// var boite = $('.box')
// function createBox(){
//   var box = "<div class='col-md-1 box-container' ></div>"
//   var innerBox = "<div class='inner-box' ></div>"
//   for( var i = 0; i < 21; i++ ){
//     $(innerBox).appendTo( $(box) ).appendTo( boite );
//     console.log(i)
//   }
//   $(box).appendTo( boite )
// }
//
// createBox()
//
//
