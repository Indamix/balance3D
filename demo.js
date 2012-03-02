


img = document.getElementById('img');
text = document.getElementById('text');

balance3D(img, {
	perspective: 500
  // , smooth: .5
});


balance3D(text, {
	perspective: 500
  // , smooth: 1
});


document.body.onclick = function(){
	balance3D.stop(img)
	balance3D.stop(text)
}




