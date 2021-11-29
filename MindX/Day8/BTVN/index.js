function send() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let website = document.getElementById("website").value;
    let comment = document.getElementById("comment").value;
    let female = document.getElementById("female");
    let other = document.getElementById("other");
    let male = document.getElementById("male");
    if (female.checked) {
        gender = "Female"
    }
    if (male.checked) {
        gender = "Male"
    }
    if (other.checked) {
        gender = "Other"
    }
    confirm("Your infomation:\n" + "Name: " + name + "\n" + "Email: " + email + "\n" + "Website: " + website + "\n" + "Comment: " + comment + "\n" + "Gender: " + gender);
}