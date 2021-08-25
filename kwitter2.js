function addUser() {

    user_name2 = document.getElementById("input2").value;
  
    localStorage.setItem("user_name2", user_name2);
    
      window.location = "lets_chat_room2.html";
  }