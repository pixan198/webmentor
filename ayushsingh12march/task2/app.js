window.onscroll = function (e) {
  // print "false" if direction is down and "true" if up
  console.log(this.oldScroll > this.scrollY);
  this.oldScroll = this.scrollY;
}

qnButton = document.querySelector(".Img-question")
close = document.querySelector(".About-close")
about = document.querySelector(".About")

qnButton.addEventListener('click', () => {
  about.style.opacity=0.7;
  about.style.visibility="visible"
})
close.addEventListener('click', () => {
  about.style.opacity=0;
  about.style.visibility="hidden"
})
