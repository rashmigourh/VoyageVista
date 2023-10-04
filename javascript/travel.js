// for login form
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');

formBtn.addEventListener("click",()=>{
    loginForm.classList.add('active');
})

formClose.addEventListener("click",()=>{
    loginForm.classList.remove('active');
})

//for menubar
let menuBar=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menuBar.addEventListener("click",()=>{
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');

})

// for video buttons
let videoBtn=document.querySelectorAll('.vid-btn');  //nav-btn 
let Slides=document.querySelectorAll(".video-slide");
let content=document.querySelectorAll(".content");  

var sliderNav=function(e){
    videoBtn.forEach((btn)=>{
        btn.classList.remove('active');
    });

    Slides.forEach((slide)=>{
        slide.classList.remove('active');
    });

    content.forEach((content)=>{
        content.classList.remove('active');
    });

    videoBtn[e].classList.add('active');
    Slides[e].classList.add('active');
    content[e].classList.add('active');
}

videoBtn.forEach((btn, i)=>{
    btn.addEventListener('click',()=>{
        sliderNav(i);
    });
});


window.onscroll=()=>{
    menuBar.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active')
}

//for eye-icon toggle
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password-log');
    var eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        //eye open 
        eyeIcon.innerHTML ='<i class="fa-solid fa-eye"></i>';
    } else {
        passwordInput.type = 'password';
        //eye close
        eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
}

