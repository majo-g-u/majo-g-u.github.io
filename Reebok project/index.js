const myProducts = [
    {
        name: 'Zapatillas Rebook Hombre',
        price: '$ 4000',
        img: 'img/zapa1.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Mujer',
        price: '$ 4000',
        img: 'img/zapa2.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Niños',
        price: '$ 4000',
        img: 'img/zapa3.webp',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
    {
        name: 'Zapatillas Rebook Ancianos',
        price: '$ 4000',
        img: 'img/imagen4.jpg',
        description: 'Es una zapatilla para correr'
    },
]


var numberBadge = document.getElementById('badge');
var cartNumber = JSON.parse(localStorage.getItem('session'));

myProducts.forEach(addItems);

function addItems(item, i) {

    const element = document.getElementById('products');

    element.innerHTML += ` 
      
     <div class="swiper-slide">
     <div class="card" style="width: 18rem;">
     <img src="${item.img}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${item.name}</h5>
       <p class="card-text d-none d-md-block">${item.description}</p>
       <button class="" onclick="addCart(${i})">Go somewhere</button>
     </div>
   </div>
 </div>`
}


function addCart(i) {

    var myArray = JSON.parse(localStorage.getItem('session')) || [];


    myArray.push(myProducts[i])

    localStorage.setItem('session', JSON.stringify(myArray));

    console.log(myArray);

}


numberBadge.innerHTML += `<span class="badge badge-primary cart-badge">${cartNumber.length}</span>`




