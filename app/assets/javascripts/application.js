// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

function disableButton(){
  document.getElementsByName("commit")[0].disabled = true;
}

function hideEmptyRow(){
  document.getElementsByClassName("associations")[0].lastElementChild.style.display = 'none';
}

function showEmptyRow(){
  document.getElementsByClassName("associations")[0].lastElementChild.style.display = 'block';
}

function deleteRow(item){
  item.parentNode.parentNode.style.display = 'none';
  item.nextElementSibling.nextElementSibling.checked = true;
}
function delay(){
  window.setTimeout(disableButton, 10)
}

function smoothScroll(){
  window.scrollBy({ top: 100, behavior: 'smooth' });
}




document.addEventListener("DOMContentLoaded", function() {
  "use strict"

  var links = document.querySelectorAll("a.scroll")
  var i = links.length
  var root = /firefox|trident/i.test(navigator.userAgent) ? document.documentElement : document.body
  var easeInOutCubic = function(t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b
    return c/2*((t-=2)*t*t + 2) + b
  }

  while (i--)
    links.item(i).addEventListener("click", function(e) {
      var startTime
      var startPos = root.scrollTop
      var endPos = document.getElementById(/[^#]+$/.exec(this.href)[0]).getBoundingClientRect().top
      var maxScroll = root.scrollHeight - window.innerHeight
      var scrollEndValue = startPos + endPos < maxScroll ? endPos : maxScroll - startPos
      var duration = 900
      var scroll = function(timestamp) {
        startTime = startTime || timestamp
        var elapsed = timestamp - startTime
        var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration)
        root.scrollTop = progress
        elapsed < duration && requestAnimationFrame(scroll)
      }
      requestAnimationFrame(scroll)
      e.preventDefault()
    })
})
