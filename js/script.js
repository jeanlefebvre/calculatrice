var btn = document.getElementsByTagName('button');
var view = document.getElementById('ecran');

for(var i=0, il=btn.length; i<il; i++){
	btn[i].addEventListener('click', function(){
		switch(this.innerHTML){
			case ('DEL'):
				view.innerHTML='';
				break;
			case ('='):
				var res = eval(view.innerHTML);
				view.innerHTML = res;
				break;
			default:
				view.innerHTML += this.innerHTML;
		}
	});
}