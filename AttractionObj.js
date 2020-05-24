function Force(x,y,type)
{
   this.pos = createVector(x,y)
   this.type = type;
   this.show = function()
   {
       if (this.type =="A") 
          fill(0,255,0);
       else
         fill(255,0,0)
        circle(this.pos.x,this.pos.y,15)
        noFill();
   }
}

function Particle(x,y)
{
   this.pos = createVector(x,y)
   this.vel = createVector()
   this.acc = createVector()
   this.prev =this.pos;

   this.show = function()
   {
        stroke(0,0,255,50);
        circle(this.pos.x,this.pos.y,0.5)
   }

   this.update = function()
   {
     this.vel.add(this.acc)
   	 this.pos.add(this.vel) 
       this.acc.mult(0);
   }

   this.attracted = function()
   {
      for (let j=0;j<forces.length;j++)
      {
   	  var force = p5.Vector.sub(forces[j].pos,this.pos);

   	  var dsq = force.magSq()
      
   	  var G = 1;
   	  dsq = constrain(dsq,50,300)
   	  
      var strength = G/ dsq
   	  force.setMag(strength);
   	 if (forces[j].type =="A")
        this.acc.add(force);
       else
        this.acc.sub(force)
      }

   }
}

function mousePressed()
{
    if(mouseX<width&& mouseY<height)
   {    
      addScreen();

   }
   else
    Buttons(); 

}

function Buttons()
{
$(".screen").on("click",function()
{
   let b = document.getElementsByTagName("button")
  $ (b).removeClass("on")   
   $(this).addClass("on") 
 
})
 
 $("#G").on("click",function()
 {
    $("#G").addClass("active")
       check=1;
 //  {
 //    if (check==0);
 //    {
 //      $("#G").addClass("active")
 //      check=1;
 //      }
 //      else
 //      { $("#G").removeClass("active")
 //        check =0;
 //     }
})

 $("#C").on("click",function()
 {
   check=0;
   particles =[];
     forces =[];
     background(0);
    $("#G").removeClass("active")
    $(".on").removeClass("on")

 })

}

function addScreen()
{
        if($(".screen").hasClass("on"))
   {
     console.log("add screen")
      let temp = document.getElementsByClassName("on")[0].id;
     if (temp=="P")
      particles.push(new Particle(mouseX,mouseY)) 
   else
      forces.push(new Force(mouseX,mouseY,temp))
   }
}

function mouseDragged()
{
    mousePressed();
}



