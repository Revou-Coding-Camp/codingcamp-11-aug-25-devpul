// ========== RUN FUNCTIONS
sidebar();
// welcomeSpeech();
/* ========== WELCOME SPEECH */
function welcomeSpeech(){
    const h1 = document.createElement("h1");
    const username = document.getElementById("welcome-speech");

    let inputUsername = prompt("Masukan Nama kamu: ");
    if(inputUsername.length > 0){
        username.innerHTML = `Hi ${inputUsername}, Welcome to <span>Noe Corp</span>.`;
    }
}

/* ========== BUTTON MENU */
function sidebar(){
    const nav = document.querySelector("#mobile");
    const btnOpenMenu = document.getElementById("menu");
    const btnCloseMenu = document.getElementById("close");

    btnOpenMenu.addEventListener("click", function(){
        nav.classList.add("active");
    });

    btnCloseMenu.addEventListener("click", function(){
        nav.classList.remove("active");
    });
}

/* ========== MESSAGE US */
const btnSubmit = document.getElementById("submit");
const outputUser = document.querySelector(".outputUser");

btnSubmit.addEventListener("click", function() {
    const nama = document.getElementById("nama").value.trim();
    const tgl_input = document.getElementById("tgl_lahir").value.trim();
    const tgl_lahir = new Date(tgl_input).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const jenis_kelamin = document.querySelector(".jenis_kelamin").value.trim();
    console.log(jenis_kelamin);
    const pesan = document.querySelector("#pesan").value.trim();
    const p = document.createElement("p");

    let kosong = [];
    // kalau tidak ada value dari inputan
    if (!nama) kosong.push('Nama');
    if (!tgl_input) kosong.push('Tanggal Lahir');
    if (!jenis_kelamin) kosong.push('Jenis Kelamin');
    if (!pesan) kosong.push('Pesan');

    // kalau length array lebih dari 1
    if (kosong.length > 0) {
        p.style.color = "red";
        p.style.fontSize = "20px";
        p.innerHTML = `Harap masukan ${kosong.join(", ")}`;
        outputUser.appendChild(p);

        setTimeout(() => {
            p.remove();
        }, 1100);
        return;
    }

    p.innerHTML = `
    Nama: ${nama}<br>
    Tanggal Lahir: ${tgl_lahir}<br>
    Jenis Kelamin: ${jenis_kelamin}<br>
    Pesan: ${pesan}`;

    outputUser.appendChild(p);
});
