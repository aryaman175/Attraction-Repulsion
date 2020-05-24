// x coordinates all fine but x diff is undefined!
//define all global variables outside setup
//if they need initial values put inside
var particles;
var forces;
var x;
var check;
function setup()
{
	 let cnv=createCanvas(900,600)
     cnv.position(0,0)
     x = new Particle(20,20)
    background(0);
     particles =[];
     forces =[];
     check = 0;

}

function draw()
{
	for (var i=0;i<particles.length;i++)
        particles[i].show();

   for  (let j=0;j<forces.length;j++)
   {
     forces[j].show()
   }
     if (check==1)
       {
          for (var i=0;i<particles.length;i++)
    	{
    	   particles[i].attracted();
    	    particles[i].update();
         	particles[i].show();
        }
    }

}
