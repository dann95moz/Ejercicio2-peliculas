import {peliculas} from "./data.js"
document.addEventListener("DOMContentLoaded", () =>{
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel,{
        duration: 3000,
    });
});
let template = document.getElementById('template-card').content;
let fragment = document.createDocumentFragment();
let itm = document.getElementById('items');
console.log(peliculas)


peliculas.forEach(item => {
    let { id, nombre, imagen, resumen } = item;
    
   
    template.querySelector('h5').textContent = nombre;
    
    template.querySelector('img').setAttribute('src', imagen );
    
    template.querySelector('img').dataset.id = id;

    template.querySelector('button').setAttribute('id',id)
    
    
    
    
    const clone = template.cloneNode(true);
    fragment.appendChild(clone)
    
})
itm.appendChild(fragment)




function Collect(){
    var name = document.getElementById("name").value
    var lastname = document.getElementById("lastName").value
    var phone = document.getElementById("phone").value
    var adress = document.getElementById("adress").value
    var other = document.getElementById("other").value
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("phone", phone)
    localStorage.setItem("adress", adress)
    localStorage.setItem("other", other)
    var storedName= localStorage.getItem("name")
    var storedLastName= localStorage.getItem("lastname")
    var storedphone = localStorage.getItem("phone")
    var storedadress= localStorage.getItem("adress")
    var storedother= localStorage.getItem("other")
    
    console.log(storedName, storedLastName, storedphone, storedadress, storedother)
}
