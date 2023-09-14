let arr = [];
async function getNames() {
    let key = "YAVQjWNSswm0PBJOYQjhVw==oe6cAaYa5XEC32hy"
    const req = await fetch(`https://api.api-ninjas.com/v1/babynames?gender=neutral`, {
        headers: { 'X-Api-Key': key}});
    const res = await req.json();
    res.map(n => arr.push(n));
}
let count = 0;
const generate = document.getElementById("generate");
const names = document.getElementById("name"); 
const prev = document.getElementById("previous");
const next = document.getElementById("next");
const btn = document.getElementById("btn");
generate.addEventListener("click", () => {
    arr = [];
    count = 0;
    names.innerText = "";
    getNames();
});

btn.addEventListener("click", () => {
    if ( arr[0] == undefined) {
        alert("Please click on generate first");
    }
    else {
    names.innerText = arr[count];
    }
    })
    
    
prev.addEventListener("click", () => {
    if (names.innerText === arr[0]){
        names.innerText = arr[0] 
    }
    else {
        names.innerText = arr[count - 1];
        count = count - 1;
    }
})

next.addEventListener("click", () => {
    if (names.innerText === arr[9]){
        names.innerText = arr[9] 
    }
    else {
        names.innerText = arr[count + 1];
        count = count + 1;
    }
})
    

