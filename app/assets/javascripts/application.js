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
  $(this).prop("disabled", true);
  $("form").submit();
}

function hideLastRow(){
  last = $(".association.container").last()
  if(last) {
    last.hide();
  }
}

function showLastRow() {
  $(".association.container").last().show();
}

$(function (){
  $(".new-association").on("click", showLastRow);
});

function deleteRow(){
  $(this).closest(".association").hide();
  $(this).siblings("input[type=checkbox]").prop("checked", true);
}

$(function (){
  $("input[type=submit]").on("click", disableButton);
});

$(function (){
  $(".new-association").on("click", showLastRow);
});

$(function (){
  $(".delete-association").on("click", deleteRow);
});

$(hideLastRow);

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
