var typed = new Typed(".auto-type",{
    strings: ["Web Designer","Front-End Developer", "Back-End Developer","Web Designer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true
});

// <!-- Start of Tawk.to Script-->

    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/6310be4954f06e12d892306b/1gbsmekcg';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
//     <!--End of Tawk.to Script -->
 
//smtpjs
function sendEmail(){
        Email.send({
Host : "smtp.elasticemail.com",
Username : "ankur73tiwari@gmail.com",
Password : "476C25C3150F9DC4AD89F43B0E068F3F3003",
To : 'ankur37tiwari@gmail.com',
From : "ankur73tiwari@gmail.com",
Subject : "New form submission",
Body : "Name: "+ document.getElementById("name").value + "<br>Email: " + document.getElementById("email").value + "<br>Message: " + document.getElementById("msg").value
}).then(
    
    
);
showSubmitMsg();
    }

document.querySelector(".project-card").addEventListener("mouseover",()=>{
        document.querySelector(".project-description").style.display="block";
        

});
document.querySelector(".project-card").addEventListener("mouseout",()=>{
        document.querySelector(".project-description").style.display="none";

});

document.querySelectorAll(".text-input").forEach((element)=>{
        element.addEventListener("blur",(event)=>{
                if(event.target.value!=""){
                        event.target.nextElementSibling.classList.add("filled");
                }
                else{
                        event.target.nextElementSibling.classList.remove("filled");
                }
        });
});

//   || webp img

function showSubmitMsg(){
        document.querySelector(".submit-msg").style.display="block";
        setTimeout(hideSubmitMsg, 3000)
}
function hideSubmitMsg(){
        document.querySelector(".submit-msg").style.display="none";

}
function file_attachment(){
        alert("Sorry file attachment is not working currently");
}
      




function websiteVisits(response) {
     
                        document.querySelector("#visits").textContent =  response.value;
};

