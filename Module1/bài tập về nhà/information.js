function send() {
    let name= document.getElementById("name");
    let ID = document.getElementById("ID");
    let email = document.getElementById("email");
    let ngaythangnam = document.getElementById("ngaythangnam");
    let address = document.getElementById("anderess");
    let customer = document.getElementById("customer");
    let mount = document.getElementById("mount");
    let renday = document.getElementById("rendays");
    let server = document.getElementById("server");
    let typerom = document.getElementById("typerom");
    document.write("-họ và tên :" + name.value + '<br>');
    document.write("-chứng minh nhân dân :" + ID.value + '<br>');
    document.write("-email :" + email.value + '<br>');
    document.write("-ngày-tháng-năm :" + ngaythangnam.value + '<br>');
    document.write("-địa chỉ :" + address.value + '<br>');
    document.write("-giảm giá :" + sale + '<br>');
    document.write("-số lượng :" + mount.value + '<br>');
    document.write("-khách hàng :" + customer.value + '<br>');
    document.write("-số ngày :" + renday.value + '<br>');
    document.write("-dịch vụ :" + server.value + '<br>');
    document.write("-loại phòng :" + typerom.value);

}