function getInformationFromForm() {
    const id = document.getElementById('TaiKhoan').value;
    const name = document.getElementById('HoTen').value;
    const giaMon = document.getElementById('giaMon').value;
    const hinhMon = document.getElementById('hinhMon').value;
    const loaiMon = document.getElementById('loaiMon').value;

    console.log({ maMom, tenMon, giaMon, hinhMon, loaiMon })

    var monAn = {
        maMon: maMom,
        tenMon: tenMon,
        giaMon: giaMon,
        hinhMon: hinhMon,
        loaiMon: loaiMon
    }
    return monAn;
}

function convertString(max, value) {
    if (value.length > max)
        return value.slice(0, 30) + "..."
    else
        return value
}