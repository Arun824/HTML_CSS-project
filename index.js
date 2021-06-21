const toggler = document.querySelector(".toggler");
const basicPrice = document.getElementById("Basic-price");
const professionalPrice = document.getElementById("Professional-price");
const masterPrice = document.getElementById("Master-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        basicPrice.innerHTML = `$200 <span> / year </span>`;
        professionalPrice.innerHTML = `$300 <span> / year </span>`;
        masterPrice.innerHTML = `$450 <span> / year </span>`;
    }else{
        basicPrice.innerHTML = `$19.99 <span> / month </span>`;
        professionalPrice.innerHTML = `$24.99 <span> / month </span>`; 
        masterPrice.innerHTML = `$39.99 <span> / month </span>`; 
    }
})