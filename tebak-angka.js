alert("Selamat datang permainan tebak angka")
let lagi = true

while (lagi) {

    let choice = parseInt(prompt("Tebak angka: (1-10) \nKamu memiliki 3 kesempatan untuk menebak angka"))
    let result = ""
    let n = Math.floor((Math.random() * 10) + 1)
    
    for (let chance = 3; chance >= 1; chance--) {
        if (choice == n) {
            result = "Tebakan kamu benar!!"
            alert("Selamat!! " + result + "\nAngka yang dicari adalah: " + n)
            break
        } else if (choice != n && chance > 1) {
            result = (choice < n) ? "terlalu rendah" : "terlalu tinggi"
            alert("Tebakan kamu: " + result + "\nSisa " + (chance-1) + " kesempatan untuk menebak angka")
            choice = parseInt(prompt("Tebak angka: (1-10) \nKamu memiliki " + (chance-1) + " kesempatan untuk menebak angka"))
        } else if (choice != n && chance == 1) {
            alert("Yahh!! Kesempatan menebak kamu sudah habis" + "\nAngka yang benar adalah: " + n)
        }
    }
    lagi = confirm("Main Lagi ?")
}

alert("Sayonara~")