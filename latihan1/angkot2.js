let noAngkot = 1
let jumlahAngkot = 10
let angkotBeroperasi = 6

while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
    noAngkot++
}

for (noAngkot = angkotBeroperasi+1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.")
}