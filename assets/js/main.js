const BASE_URL = "https://63c111e899c0a15d28e0ccdb.mockapi.io"

function renderUserList(users) {
    var contentHTML = ""

    users.reverse().forEach(item => {
        var contentTr = `
        <tr>
            <td>${item.id}</td>
            <td>${item.taiKhoan}</td>
            <td>${item.matKhau}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.ngonNgu}</td>
            <td>${item.loaiND}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaMonAn('${item.maMon}')">Xóa</button>
                <button class="btn btn-warning" onclick="suaMonAn('${item.maMon}')">Sửa</button>
            </td>
        </tr>`
        if (item.loaiND == "GV") {
            contentHTML += contentTr
        }
    });

    document.querySelector("#tblDanhSachNguoiDung").innerHTML = contentHTML
}

function fetchUserList() {
    axios({
        url: `${BASE_URL}/userManagement`,
        method: "GET"
    }).then(res => {
        console.log(res.data);
        var userList = res.data
        renderUserList(userList)
    }).catch(err => {
        console.log(err);
    })
}

function deleteUser(id) {
    axios({
        url: `${BASE_URL}/userManagement/${id}`,
        method: "DELETE",
    }).then(res => {
        console.log(res);
        fetchUserList()
    }).catch(err => {
        tatLoading()
        console.log(err);
    })
}

function themMonAn() {
    var monAn = layThongTinTuForm()
    axios({
            url: `${BASE_URL}/food`,
            method: "POST",
            data: monAn
        })
        .then(function(res) {
            fetchUserList()
        })
        .catch(function(err) {
            console.log(err)
        })
}

function suaMonAn(id) {
    batLoading()
    axios({
            url: `${BASE_URL}/food/${id}`,
            method: "GET"
        })
        .then((res) => {
            tatLoading()
            console.log(res);
        })
        .catch((err) => {
            tatLoading()
            console.log(err);
        })
}

function capNhatMonAn() {
    var monAN = layThongTinTuForm()

    axios({
        url: `${BASE_URL}/food/${monAn.maMon}`,
        method: "PUT",
        data: monAn,
    })
}

fetchUserList()