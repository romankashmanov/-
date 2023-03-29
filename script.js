
document.querySelector(".decoration-btn").onclick = function () {
  const userPassFirst = document.querySelector("#password1").value;
  const userPassSecond = document.querySelector("#password2").value;
  const password = document.querySelector(".dont_password");
  if (userPassFirst == "") {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
  } else if (userPassFirst != userPassSecond) {
    document.getElementById("password1").style = "border: 1px solid red";
    document.getElementById("password2").style = "border: 1px solid red";
    return false;
  } else if (userPassFirst == userPassSecond) {
    document.getElementById("password1").style = "border: 2px solid green";
    document.getElementById("password2").style = "border: 2px solid green";
    password.remove();
  }
  return true;
};


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const slider = document.querySelector('.price__cards');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offset;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offset;
  const scrollSpeed = 3;
  const walk = (x - startX) * scrollSpeed;
  slider.scrollLeft = scrollLeft - walk;
});