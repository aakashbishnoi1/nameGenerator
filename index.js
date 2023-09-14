let arr = [];
let isDataLoaded = false;
async function getNames() {
    let key = "YAVQjWNSswm0PBJOYQjhVw==oe6cAaYa5XEC32hy"
    const req = await fetch(`https://api.api-ninjas.com/v1/babynames?gender=neutral`, {
        headers: { 'X-Api-Key': key}});
    const res = await req.json();
    arr = res;
    isDataLoaded = true;
}
let count = 0;
const generate = document.getElementById("generate");
const names = document.getElementById("name"); 
const prev = document.getElementById("previous");
const next = document.getElementById("next");
const btn = document.getElementById("btn");
generate.addEventListener("click", async () => {
    arr = [];
    count = 0;
    names.innerText = "";
    isDataLoaded = false;
    await getNames();
    isDataLoaded = true;
});

btn.addEventListener("click", () => {
    if ( isDataLoaded === true) {
        names.innerText = arr[count];
    }
    else {
        alert("please wait for the api call to finish");
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
    

