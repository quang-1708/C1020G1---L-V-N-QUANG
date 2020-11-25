function send(){
    let name= document.getElementById("name");
    let ID = document.getElementById("ID");
    let ngaythangnam = document.getElementById("ngaythangnam");
    let email = document.getElementById("email");
    let address = document.getElementById("address");
    let customer = document.getElementById("customer");
    let sale = document.getElementById("giamgia");
    let mount = document.getElementById("mount");
    let renday = document.getElementById("rentdays");
    let server = document.getElementById("server");
    let typeroom = document.getElementById("typeroom");

    document.write("FullName:" + name.value +'<br>');
  document.write("ID:" + ID.value + '<br>');
    document.write("day/month/year:" + ngaythangnam.value + '<br>');
  document.write("email :" + email.value + '<br>');
  document.write("Address:" + address.value + '<br>');
    document.write("customer:" + customer.value + '<br>');
    document.write("sale:" + sale.value + '<br>');
   document.write("mount:" + mount.value + '<br>');
  document.write("renday:" + renday.value + '<br>');
    document.write("server:" + server.value + '<br>');
   document.write("typeroom:" + typeroom.value);


}