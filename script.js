const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit',function(event){
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if(username ==="|| password === "){
    errorMsg.textContent = 'Please fill in both username and password.';
  } 
  else {
    window.location.href = 'anotherstyle.html';
  }
});