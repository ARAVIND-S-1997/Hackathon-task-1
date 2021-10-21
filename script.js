
document.body.innerHTML=`<section class="list"></section>`;
async function pokemon(){
    const data=await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const users=await data.json();
    const usercontainer=document.querySelector(".list"); 
   users.forEach(user => {
    usercontainer.innerHTML += `
    <h1>${user.abilities}</h1>`;  
   });
users.forEach(animals => {
    document.body.innerHTML+=`
    <h1> ${animals.name}</h1>`;
});
console.log(users);
}
pokemon();



