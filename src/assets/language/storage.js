export function getItem(name){
    return localStorage.getItem(name);
}

export function setItem(name,value){
    return localStorage.setItem(name,value);
}

// remove
export function removeItem(name){
    return localStorage.removeItem(name);
}