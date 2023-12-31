let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function getAll(){
      // Check individual fields
    const date = new Date();
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value;
    const time = date;

    // Build an array of missing fields
    const missingFields = [];

    if (!name) missingFields.push('Nama');
    if (!birthdate) missingFields.push('Tanggal Lahir');
    if (!gender) missingFields.push('Jenis Kelamin');
    if (!message) missingFields.push('Pesan');

    if (missingFields.length) {
        const messageText = `Please fill in the following fields: ${missingFields.join(', ')}`;
        alert(messageText);
        return false;
    } else {
        document.getElementById("greet").innerHTML = "Hi, "+name+ " Welcome to website";
        document.getElementById("waktu").innerHTML = time;
        document.getElementById("nama").innerHTML = name;
        document.getElementById("lahir").innerHTML = birthdate;
        document.getElementById("kelamin").innerHTML = gender.value;
        document.getElementById("pesan").innerHTML = message;
        return true;
    }
}

function resetAll(){ 
    document.getElementById("name").value = null; 
    document.getElementById("birthdate").value = null; 
    var ele = document.querySelectorAll("input[name=gender]");
    for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
    }
    document.getElementById("message").value = "";
    document.getElementById("waktu").innerHTML = null;
    document.getElementById("nama").innerHTML = null;
    document.getElementById("lahir").innerHTML = null;
    document.getElementById("kelamin").innerHTML = null;
    document.getElementById("pesan").innerHTML = null;
}