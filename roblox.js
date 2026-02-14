function hitungHarga() {
    let robuxSelect = document.getElementById("robux");
    let harga = robuxSelect.options[robuxSelect.selectedIndex].getAttribute("data-harga");
    
    if(harga){
        document.getElementById("totalHarga").value = "Rp " + parseInt(harga).toLocaleString("id-ID");
    } else {
        document.getElementById("totalHarga").value = "";
    }
}

function beliSekarang() {
    let username = document.getElementById("username").value;
    let robux = document.getElementById("robux").value;
    let harga = document.getElementById("totalHarga").value;
    let payment = document.getElementById("payment").value;

    if(username === "" || robux === "0"){
        alert("Harap isi semua data!");
        return;
    }

    let nomorWA = "628568147815"; // Ganti dengan nomor WhatsApp kamu
    let pesan = `Halo Admin, saya ingin beli ${robux} Robux
Username: ${username}
Total: ${harga}
Metode Pembayaran: ${payment}`;

    let url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');
}
