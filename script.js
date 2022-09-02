// tangkap element absensi_form dan root
let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

//buat array untuk menampung data absensi
let absensi_data = [];

// tambahkan event listener submit ke element absensi_form
absensi_form.addEventListener('submit', (event) => {
  //mencegah form dari reload page
  event.preventDefault();
  let fullname = event.target.fullname.value;
  console.info(fullname);

  //validaso mini
  if (fullname == '') {
    alert('Silahkan masukkan nama lengkap');
    return;
  }

  //["deasty", 1233, false, {name : "deasty"}]
  //push data ke dalam array absensi_data
  absensi_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleString(),
    tanggal: new Date().toLocaleDateString(),
  });

  // reset input field
  event.target.fullname.value = '';

  //panggil function render to html
  renderToHtml();
});

//function untuk render data array ke div root
function renderToHtml() {
  // reset element div root
  root.innerHTML = '';

  // mapping array to html element
  absensi_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
      <span> ${i + 1}. &nbsp; ${e.nama_lengkap} </span>
      <spam> ${e.waktu} ${e.tanggal} </span>
    </div>
    `;
  });
}

//delete function
function handleDelete(index) {
  //delete 1 data dari array
  absensi_data.splice(index, 1);

  //render kembali data dalam array ke html
  renderToHtml();
}
