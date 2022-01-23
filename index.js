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
    const prependCat = [cats.unshift(), "Arnold"];
    return prependCat;
}

function removeLastCat(){
    const removeLastCat = [...removeLastCat.slice(2)];
    return removeLastCat
}