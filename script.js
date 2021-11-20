$(document).ready(function(){

$(document).ready(function(){
  $('.parallax').parallax();
});
$(function() {
    
  //cache a reference to the tabs
  var tabs = $('#tabs li');
  
  //on click to tab, turn it on, and turn previously-on tab off
  tabs.click(function() { $(this).addClass('on').siblings('.on').removeClass('on'); });
  
  //auto-rotate every 5 seconds
  setInterval(function() {
  
  //get currently-on tab
  var onTab = tabs.filter('.on');
  
  //click either next tab, if exists, else first one
  var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
  nextTab.click();
  }, 6000);
  });

$(document).ready(function(){
  $('.tabs').tabs();
});
$('.carousel').find('scrolling')
$('.carousel').carousel({
  fullWidth: true,
  indicators: false,
  duration:600,
  });
$('.one').click(function(e){
$('.carousel').carousel('set', 0);
$('.car').removeClass('active1');
$('.one').addClass('active1');
});
$('.two').click(function(e){
e.preventDefault();
e.stopPropagation();
$('.carousel').carousel('set', 1);
$('.car').removeClass('active1');
$('.two').addClass('active1');
});
$('.three').click(function(e){
e.preventDefault();
e.stopPropagation();
$('.carousel').carousel('set', 2);
$('.car').removeClass('active1');
$('.three').addClass('active1');
});
$('.four').click(function(e){
e.preventDefault();
e.stopPropagation();
$('.carousel').carousel('set', 3);
$('.car').removeClass('active1');
$('.four').addClass('active1');
});
$('.five').click(function(e){
e.preventDefault();
e.stopPropagation();
$('.carousel').carousel('set', 4);
$('.car').removeClass('active1');
$('.five').addClass('active1');
});
$('.six').click(function(e){
e.preventDefault();
e.stopPropagation();
$('.carousel').carousel('set', 5);
$('.car').removeClass('active1');
$('.six').addClass('active1');
});
function autoplay(){
  $('.carousel').carousel('next');
  setTimeout(autoplay, 6000);
};
$('.collapsible').collapsible();
});




