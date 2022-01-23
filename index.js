const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const appendCat = [...cats, "Broom"];
    return appendCat;
}

function prependCat(){
    const prependCat = ["Arnold", ...cats];
    return prependCat;
}

function removeLastCat(name){
    const removeLastCat = cats.slice(0, -1);
    return removeLastCat;
}

function removeFirstCat(name) {
    const removeFirstCat = cats.slice(-1, 0);
    return removeFirstCat;
}