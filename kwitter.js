function dark(){
    window.location = "index2.html";
}

function light(){
    window.location = "index.html";
}

function addUser() {

    user_name = document.getElementById("input1").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "lets_chat_room.html";
  }