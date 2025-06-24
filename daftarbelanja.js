const inputnamabarang = document.getElementById('namabarang');
const inputjumlahbarang = document.getElementById('jumlahbarang');
const btn = document.getElementById('tambah');
const face = document.getElementById('elementampil');
const daftar = [];
let indexedit = null;

function preview() {

    face.innerHTML =`
    <div class="output">
     <div class="textput">
     <p>2x</p>
     <p>Kopi</p>
     </div>
     <div class="btn">
     <button>HAPUS</button>
     <button>EDIT</button>
     </div>
    </div>`;
};

function tampilkan() {
    face.innerHTML = "";
    for (let i = 0; i < daftar.length; i++) {
        face.innerHTML += `
        <div class="output">
         <div class="textput">
          <p>${daftar[i].jumlah}x</p>
          <p>${daftar[i].nama}</p>
         </div>
         <div class="btn">
          <button onclick="hapus(${i})">HAPUS</button>
          <button onclick="edit(${i})">EDIT</button><br>
         </div> 
        </div>
        <hr>`;
    } 
};

function hapus(index) {
    daftar.splice(index, 1);
    tampilkan();
};

function edit(index) {
    indexedit = index;
    inputnamabarang.value  = daftar[index].nama;
    inputjumlahbarang.value = daftar[index].jumlah;
    tampilkan()
};

btn.addEventListener('click', function () {
    let jumlah = Number(inputjumlahbarang.value);
    let nama = inputnamabarang.value;

    if (inputjumlahbarang.value === "" || inputnamabarang.value === "") {
        alert('ISI KOLOM NYA')
        return;
    }        
    else if (indexedit !== null) {
        daftar[indexedit] = {nama, jumlah};
        indexedit = null;
    }
    else {
            daftar.push({nama, jumlah});
    }
            inputnamabarang.value = "";
            inputjumlahbarang.value ="";
    tampilkan();
});
