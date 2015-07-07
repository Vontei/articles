
var title = document.getElementById('title')
var frame = document.getElementById('frame')
title.addEventListener('click', function(){
  frame.style.display = 'inherit';
});

title.addEventListener('dblclick',function(){
  frame.style.display = 'none';
})
