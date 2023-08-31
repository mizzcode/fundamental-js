let jumlahAngkot = 10,
    angkotBeroperasi = 6

for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
    }
}