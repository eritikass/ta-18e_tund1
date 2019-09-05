console.log('start', i);
for (var i = 1; i < 10; i++) {
    setTimeout(() => {
        console.log('test', i);
    }, 1000);
}
console.log('end');
console.log('###', i);