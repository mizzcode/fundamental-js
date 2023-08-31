    // POLA SEGITIGA

    let s = ''
    let n = 10

    // row
    for (let i = 1; i < n; i++) {

        // space 
        for (let j = 0; j < n - i; j++) {
            s += ' '
        }

        // pola bintang
        for (let k = 0; k < i; k++) {
            // jika k nya tidak 0 maka cetak +
            // ubah plus atau + menjadi bintang maka akan terlihat pola segitia
            if (k) {
                s += '+'
            }

            s += '*'
        }

        s += '\n'

    }

    console.log(s)