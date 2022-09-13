function states(state: "liquido" | "solido" | "gasoso") {
    return state;
};

console.log(states);

function getDoc(doc: string | number) {
    console.log(`The doc is: ${ doc }`);
};

getDoc(123456);