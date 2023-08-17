var hesapBtn = document.getElementById("btn");
var sonuc = document.querySelector("#sonuc")

function Hesapla() {

    var kenar1 = Number(document.querySelector("#txtKenar1").value);
    var kenar2 = Number(document.querySelector("#txtKenar2").value);

    var hipotenus = Math.sqrt((kenar1 * kenar1) + (kenar2 * kenar2))
    sonuc.innerHTML = "hipotenus : " + hipotenus;
    sonuc.classList.add("sonuc")
}


hesapBtn.onclick = Hesapla;





