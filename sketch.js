//setup - run once when the code is first starts
function setup() {
  createCanvas(200, 200); // this sets the size of the area in which we can draw things
  background(170);
  angleMode(DEGREES)

}
//draw - this function loops, the code within read through repeatedly while running
function draw() {
  fill(0,119,119)
  stroke(0)
  strokeWeight(1.5)
  
  //line(85, 50, 85, 108); //torso
  //line(125, 50, 125, 108);  //torso


  //line(125, 50, 138, 100);  //right arm
  //line(128, 47, 141, 100);  //right arm outter

  //line(85, 50, 72, 100);  //left arm
  //line(82, 47, 69, 100);  //left arm outter

  //line(82, 47, 79.8, 35); //left neck
  //line(128, 47, 130.7, 35); //right neck


  strokeWeight(0)
  quad(82, 47, 128, 47, 130.7, 35, 79.8, 35) //neck
  rect(84, 46, 42, 61) //torso
  quad(86, 48, 82, 47, 69, 100, 72, 100,) //left arm 

  quad(124, 47, 128, 47, 141, 100, 138, 100) //right arm


  strokeWeight(1.5)
  line(85, 108, 80, 150); //left outside leg top
  line(80, 150, 79, 190); //left outside leg lower
  
  line(125, 108, 130, 150); //right outside leg top
  line(130, 150, 131, 190); //right outside leg lower
  
  line(89, 108, 84, 150); //left inside leg top
  line(84, 150, 83, 190); //left indside leg lower

  line(121, 108, 126, 150); //left inside leg top
  line(126, 150, 125, 190); //left indside leg lower


  noFill()
  arc(105, 110, 31, 25, 180, 0) //bottom of torso

  arc(87, 15, 10, 10, 120, 350);  //left eye
  arc(125, 17, 10, 10, 185, 80);  //right eye

  fill(0,119,119)

  arc(105, 35, 50, 47, 180, 0); //top of head

  arc(87, 15, 10, 10, 120, 350);  //left eye
  arc(125, 17, 10, 10, 185, 80);  //right eye
  
  fill(0)
  ellipse(125, 16, 8, 5.3); //right pupil
  ellipse(87, 14, 8, 5.3);  //left pupil

  line(100, 15, 101, 20); //left nose
  line(110, 15, 109, 20); //right nose

noFill()
  arc(105, 40, 30, 30, 180, 0) //mounth 



}
