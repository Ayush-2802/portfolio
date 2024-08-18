const bob = document.getElementsByTagName('div')[0];

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.2;  //how fast ball catches up to mouse pointer;

function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;
      
  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  
  bob.style.left = ballX + 'px';
  bob.style.top = ballY + 'px';

  requestAnimationFrame(animate)

};

animate();
 
document.addEventListener('mousemove',function(e){
 mouseX = e.pageX;
 mouseY = e.pageY;
});

document.addEventListener('click',function(e){
 e.preventDefault;
  bob.classList.remove('active');
  //some rando comment
  
  void bob.offsetWidth;
  
  bob.classList.add('active');
  
},false);
 
