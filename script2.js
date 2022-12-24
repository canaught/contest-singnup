const user = JSON.parse(localStorage.getItem("userstate"));
function setValues() {

    //enables/disables signup btn 
    if(user==null){
        document.getElementById("signup_btn").innerText = "Sign up";
    }

    //set data if user found
    document.getElementById('username').innerText = user.username;
    document.getElementById('fullname').innerText = user.username;
    document.getElementById('email').innerText = user.email;
    document.getElementById('pwd').innerText = user.password;
    document.getElementById('dob').innerText = user.dob;

    
}
// console.log(user);

setValues();

function logout() {
    document.getElementsByTagName("input").value = "";
    localStorage.removeItem("userstate");
    setTimeout(() => {
        location.href = 'index1.html',"_blank";
    }, 4000);
}

