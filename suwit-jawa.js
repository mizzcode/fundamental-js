// untuk looping
let lagi = true

while (lagi) {

    // membuat pilihan suwit untuk manusia
    let player = prompt("pilih: (gajah, orang, semut)")
    // membuat nomor acak
    let computer = Math.random()
    // untuk menampung hasil akhir
    let result = ""

    // membuat pilihan suwit untuk komputer
    if (computer < 0.34) {
        computer = "semut"
    } else if (computer >= 0.34 && computer < 0.64) {
        computer = "orang"
    } else {
        computer = "gajah"
    }
    
    // membuat rules permainan
    if (player == computer) {
        result = "SERI!"
    } else if (player == "gajah") {
        result = (computer == "orang") ? "MENANG!" : "KALAH!"
    } else if (player == "orang") {
        result = (computer == "semut") ? "MENANG!" : "KALAH!"
    } else if (player == "semut") {
        result = (computer == "gajah") ? "MENANG!" : "KALAH!"
    } else {
        result = "Pilihan tidak dimengerti semoga harimu menyenangkan!"
    }

    alert("Pilihan kamu: " + player + "\n" + "Pilihan Komputer: " + computer + "\n" + "Hasilnya: Kamu " + result)
    
    lagi = confirm("Main Lagi ?")
}

alert("Bye~~")