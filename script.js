let data = ["Coding", "Live Code", "Rocket Challange"];

function display() {
    let tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th class='th-no'>No.</th><th class='th-kerjaan'>Kegiatan</th><th>Aksi</th></tr>";
    for (let i = 0; i < data.length; i++) {
        let btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        let btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Delete</button>";
        tabel.innerHTML += "<tr><td>" + (i+1) + "</td><td class='td-kerjaan'>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}

function count() {
    document.getElementById("count").innerHTML = data.length
}

function add() {
    let input = document.querySelector("input[name=toDoList]");

    if (input.value === ""){
        alert("Tidak boleh kosong!");
    } else {
        data.push(input.value);
        display();
        input.value = "";

    }
    count()
}

function edit(i) {
    let dataBaru = prompt("Edit", data[i]);
    if (dataBaru === null){
        dataBaru = data[i]
    }else {
        data[i] = dataBaru;
    }
    count()
    display();
}

function hapus(i) {
    if (confirm("Yakin dihapus?")) {
        data.splice(i,1);
    }
    count()
    display();
}

count()
display();

