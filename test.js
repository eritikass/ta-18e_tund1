const y = 1234;
let z = 1234;

function sum(a, b, c = 0) {
    return a + b + c;
}

console.log('1 + 5 = ', sum(1, 5)); 
console.log('1 + 5 + 3 = ', sum(1, 5, 3));

let functest2 = function(a, b) {
    return a + b;
}
console.log('functest2', functest2(1, 2));
functest2 = function() {
    return 'aaa';
}
console.log('functest2', functest2());


const sumx = (a, b) => {
    return a + b;
}
console.log('1 + 5 = ', sumx(1, 5)); 

// singel line comment

/*
multi line comment
*/

for (i = 1; i < 10; i++) {
    console.log('i', i);
    if(i === 6 || false) {
        console.log("Hello!"); 
    }
    
}

console.log("test", y);

