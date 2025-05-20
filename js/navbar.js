document.getElementsByClassName("header")[0].innerHTML=
`
<div class="nav1">
<div class="logo_1">DNBCNEWS</div>
<div class="nav-links_1">
<div class="sidebar-logo_1">
</div>
<ul class="link_s"> 
<li><a class="ab " href="index.html">HOME</a></li>
<li><a class="ab " href="about.html">ABOUT US</a></li>
<li><a class="ab " href="sport.html">SPORTS</a></li>
<li><a class="ab " href="business.html">BUSINESS</a></li>
<li>
<a class="ab " href="world.html" lo>TODAY IN WORLD</a>
<div class="arrow_1"></div>
<ul class="sub_menu more_sub_menu">
<div class="LT"><a href="karachi.html">Karachi</a></div>
<div class="LT"><a href="lahore.html">Lahore</a></div>
<div class="LT"><a href="islamabad.html">Islamabad</a></div>
<div class="LT"><a href="multan.html">Multan</a></div>
<div class="LT"><a href="quetta.html">Quetta</a></div>
</ul>
</li>
<li><a class="ab " href="contact.html">CONTACT US</a></li>
</ul>
<div class="search-bar" id="search">
<div class="search">
<input type="search" placeholder="Search">
<i class='bx bx-x' id="search-close"></i>
</div>
</div>
<div class="nav-icon">
<i class='bx bx-search' id="search-btn"></i>
<i class='bx bx-user-circle' id="login-btn"></i>
</div>
</div>
<div class="login_page" id='login'>
<div class="wrapper">
 <i class='bx bx-x' id="login-close"></i>
    <div class="form-wrapper sign-in">
      <form action="">
        <h2>Login</h2>
        <div class="input-group">
          <input type="text" required>
          <label for="">Username</label>
          </div>
          <div class="input-group">
          <input type="password" id="password" required>
          <label for="password">Password</label>
          <i class="uil uil-eye" id="eye" onclick="toggle()"></i>
          <a href="#"class="forgot-pass" >Forgot your password?</a>
          </div>
          <input class="button_log" type="submit" value="Login">
          <div class="signUp-link">
          <p>Don't have an account? <a href="#" class="signUpBtn-link">Sign Up</a></p>
          </div>
          </form>
          </div>
          <div class="form-wrapper sign-up">
          <form action="">
          <h2>Sign Up</h2>
          <div class="input-group">
          <input type="text" required>
          <label for="">Username</label>
          </div>
          <div class="input-group">
          <input type="email" required>
          <label for="">Email</label>
          </div>
          <div class="input-group">
          <input type="password" id="signus_password"  required>
          <label for="">Password</label>
          <i class="uil uil-eye" id="signus_eye" onclick="toggle()"></i>
          </div>
          <input class="button_log" type="submit" value="Sign Up">
          <div class="signUp-link">
          <p>Already have an account? <a href="#" class="signInBtn-link">Sign In</a></p>
        </div>
      </form>
    </div>
  </div>
  </div>
</div>
`

// footer
document.getElementsByTagName("footer")[0].innerHTML=
`
<div class="footer-content">
<h3>DNBC News</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aut labore at. Non nisi porro hic, et debitis qui voluptatibus? Hic corrupti eos minima tempora ex iure ea, earum nulla!</p>
<div class="icon-1">
<div class="icon">
<a href="#">
<div class="layer">
<span></span>
<span></span>
<span></span>
<span></span>
<span class='bx bxl-facebook'></span>
</div>
<div class="text   facebook">Facebok</div>
</a>
</div>
<div class="icon">
<a href="#">
<div class="layer">
<span></span>
<span></span>
<span></span>
<span></span>
<span class='bx bxl-twitter'></span>
</div>
<div class="text  twitter" >Twitter</div>
</a>
</div>
<div class="icon">
<a href="#">
<div class="layer">
<span></span>
<span></span>
<span></span>
<span></span>
<span class='bx bxl-instagram'></span>
</div>
<div class="text instagram">Instagram</div>
</a>
</div>
<div class="icon">
<a href="#">
<div class="layer">
<span></span>
<span></span>
<span></span>
<span></span>
<span class='bx bxl-linkedin'></span>
</div>
<div class="text  linkedin">Linkedin</div>
</a>
</div>
</div>
</div>
<div class="footer-bottom">
<p>copyright &copy; <a href="#">DNBC NEWS</a>  </p>
<div class="footer-menu">
<ul>
<li><a href="index.html">HOME</a></li>
<li><a href="">ABOUT US</a></li>
<li><a href="sport.html">SPORTS</a></li>
<li><a href="business.html">BUSINESS</a></li>
<li><a href="#">TODAY IN WORLD</a></li>
<li><a href="contact.html">CONTACT US</a></li>
</ul>
</div>
</div>
`

// search-bar
const search = document.getElementById('search'),
searchBtn = document.getElementById('search-btn'),
searchClose = document.getElementById('search-close')

searchBtn.addEventListener('click' , () => {
     search.classList.add('show-search')
     document.getElementById("search-btn").style.color='#27bcda';
})
searchClose.addEventListener('click' , () => {
     search.classList.remove('show-search')
     document.getElementById("search-btn").style.color='#fff';
})

// login
const Login = document.getElementById('login'),
loginBtn = document.getElementById('login-btn'),
loginClose = document.getElementById('login-close');

loginBtn.addEventListener('click', () => {
     Login.classList.add('show-login');
     loginBtn.style.color = '#27bcda';
});
loginClose.addEventListener('click', () => {
     Login.classList.remove('show-login');
     loginBtn.style.color = '#fff';
});
     

// login_password hide
var password = document.getElementById('password');
var eye = document.getElementById('eye');
showHidePassword = () => {
     if (password.type == 'password'){
          password.setAttribute('type', 'text');
          eye.classList.add('uil-eye-slash',);
          eye.style.color='#27bcda';
     } 
     else {
          eye.classList.remove('uil-eye-slash');
          password.setAttribute('type', 'password');
          eye.style.color='#fff';
     }
};
eye.addEventListener('click', showHidePassword);

// signus_password hide
var Sign_uspassword = document.getElementById('signus_password');
var sign_useye = document.getElementById('signus_eye');
showHidePasword = () => {
     if (Sign_uspassword.type == 'password'){
          Sign_uspassword.setAttribute('type', 'text');
          sign_useye.classList.add('uil-eye-slash',);
          sign_useye.style.color='#27bcda';
     } 
     else {
      sign_useye.classList.remove('uil-eye-slash');
          Sign_uspassword.setAttribute('type', 'password');
          sign_useye.style.color='#fff';
     }
};
sign_useye.addEventListener('click', showHidePasword);

//contact form LocalStorage.setItem
function datasave(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
}

const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});