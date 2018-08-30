$(function(){
	$(window).on('hashchange', hashchanged);
	hashchanged();
	
});

function hashchanged(){
	var  hash = location.hash.replace(/[#\/]/g, '') || 'home';
	$('#app').load("views/" + hash + '.html');
}