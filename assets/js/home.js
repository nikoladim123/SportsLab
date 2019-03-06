var logoIcon = document.getElementsByClassName('logoIcon')[0];
var zoned = document.getElementsByClassName('zoned')[0];
var hOne = document.getElementsByClassName('hOne')[0];
function homeLogoAnim(){
  logoIcon.style.left = '28vw';
  zoned.style.right = '33vw';
  hOne.style.opacity = '1';
}
// window global func
// window global func
// window global func
window.addEventListener('load',()=>{
  homeLogoAnim();
})
