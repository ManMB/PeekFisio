document.querySelectorAll("#contenedor-imagenes img").forEach(el=>{
	el.addEventlistener("click",function(ev){
this.parentNode.classList.add("active");
	})
});
document.querySelectorAll("#contenedor-imagenes").forEach(el=>{
	el.addEventlistener("click",function(ev){
this.classList.remove("active");
console.log("click");

	})
})