
//fetches input values and sets an object in localStorage
function createUser() {

  let username = document.getElementById("username").value;
  let email = document.getElementById("usermail").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let message = document.getElementById("message");
  console.log(username);
  
  const user = {
    "username" : username,
    "email" : email,
    "password": password,
    "dob" : dob
  };
    // check for required fields
    if (username=="" || email=="" || password=="" || dob=="" ) {
        message.className = "";
        message.classList.add('redalert');
        message.innerText = "Please fill all the details "
    } else {
        localStorage.setItem("userstate", JSON.stringify(user));
        message.className = "";
        message.classList.add('greenalert');
        message.innerText = "congrats!!! you are in...."
        setTimeout(() => {
            window.open('index2.html');
        }, 2000);
    }

   
   

}

/*this function works in edge & chrome but not in firefox !?
apparently you have to hold shift while clicking reload to clear input fields in firefox*/
function cleanup() {
    document.getElementsByTagName("input").value = "";
    localStorage.removeItem("userstate");
    
}
cleanup();

