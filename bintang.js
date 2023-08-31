let s = ''

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        s += '*'
    }
    s += '\n'
}

console.log(s)