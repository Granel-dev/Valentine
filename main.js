let yes = document.querySelector('.yes')
let noBtn = document.querySelector('.no')
let size = 200;
let maxwidth= 1000;
let maxHeight = 2500;
let height = 200;
let mar = 50;
let marmax = 600;
let font = 20;
let fontmax = 300;

noBtn.addEventListener('click',function(big){
  if(big.target.className == 'no'){
    if(size != maxwidth){
      size += 100
    }
    if(height != maxHeight){
      height += 100
    }
    if(mar != marmax){
      mar += 50
    }
    if(font != fontmax){
      font += 50
    }
    yes.style.width = size + 'px';
    yes.style.height = height + 'px';
    yes.style.fontSize = font + 'px';
    yes.style.paddingTop = mar + 'px';
    
  }
});
let yeah = document.querySelector('.yeah')
let img = document.querySelector('.img')
yes.addEventListener('click',function(change){
  if(change.target.className == 'yes'){
   img.src = 'img/Yay.gif';
   yeah.innerHTML = 'I Love uuuuuu';
   alert('Sunduin kita sa feb 14😍😍');
  }
});