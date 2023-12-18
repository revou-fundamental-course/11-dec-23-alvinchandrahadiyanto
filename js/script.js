function getAll(){ 
    var name=document.getElementById("name").value; 
    var birthdate=document.getElementById("birthdate").value; 
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var message=document.getElementById("message").value;
    var time = "<strong >Current Time : </strong> ";
    name = "<strong>Nama : </strong>"+name;
    birthdate="<strong >Tanggal Lahir : </strong>"+birthdate;
    gender="<strong>Jenis Kelamin : </strong>"+gender;
    message="<strong>Pesan : </strong>"+message;
    document.getElementById("waktu").innerHTML = time;
    document.getElementById("nama").innerHTML = name;
    document.getElementById("lahir").innerHTML = birthdate;
    document.getElementById("kelamin").innerHTML = gender;
    document.getElementById("pesan").innerHTML = message;
}

function resetAll(){ 
    document.getElementById("name").value = null; 
    document.getElementById("birthdate").value = null; 
    document.getElementById("gender").value = null;  
    document.getElementById("message").value = null;
    document.getElementById("waktu").innerHTML = null;
    document.getElementById("nama").innerHTML = null;
    document.getElementById("lahir").innerHTML = null;
    document.getElementById("kelamin").innerHTML = null;
    document.getElementById("pesan").innerHTML = null;
}