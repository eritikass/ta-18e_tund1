const u = [1, 2, 3];
console.log('u', u);
console.log('u.0', u[0]);
console.log('u.1', u[2]);

for (key in u) {
    console.log('!!u', key, u[key]);
}

const u2 = new Array(1, 2, 3);
console.log('u2', u2);

const e = [];
console.log('e', e);
console.log('e == []', e == false);
console.log('e === []', e === false);

const o = {
    a: 235,
    b: 'kass',
    c: {
        a: 35,
    },
}

console.log('o', o);
console.log('o.c', o.c);
console.log('o.c', o['c']);

o.a = 555555;