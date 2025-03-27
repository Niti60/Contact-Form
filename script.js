
function defaultpreventer(e){
    e.preventDefault();
    console.log("Default prevented");
  }
 async function formDefault(){
  let form = document.getElementById("myForm");
  form.reset();
    let successDiv = document.querySelector(".successDiv");
    successDiv.classList.add("active")
    await new Promise((resolve) => {
      setTimeout(()=>{
        resolve();
      },1500)
    })
    successDiv.classList.remove("active")
  }
  let form = document.getElementById("myForm");
  form.addEventListener("submit", defaultpreventer);
 function formSubmition(){
    let fname = document.getElementById("FName").value.trim();
    let lname = document.getElementById("LName").value.trim();
    let email = document.getElementById("EmailAddress").value.trim();
    let errmail = document.querySelector(".errmail");
    let msg = document.getElementById("msginput").value;
    let errmsg = document.querySelector(".errmsg");
    let msginput = document.getElementById("msginput");
    let requestType = document.querySelector('input[name="requestType"]:checked');
    let radioerr = document.querySelector(".radioerr");
    let consentcheck = document.querySelector("#consentcheck")
    let errconsent = document.querySelector(".errconsent");
    let successDiv = document.querySelector(".successDiv");
    let errfname = document.querySelector(".errfname");
    let errLname = document.querySelector(".errLname");
    let Valid = 0;
    console.log(consentcheck)
  if (fname == "") {
    document.getElementById("FName").style.border = "1px solid red"
    errfname.innerText = "This Field Is Required"
    errfname.style.color = "red"
    errfname.style.fontWeight = "500"
    Valid--;
  } else {
    Valid = +1; 
         document.getElementById("FName").style.border = ""
  errfname.innerText = ""   
  }
  if (lname == "") {
    errLname.innerText = "This Field Is Required"
    let lname = document.getElementById("LName").style.border = "1px solid red"
    errLname.style.color = "red"
    errLname.style.fontWeight = "500"
    Valid--;
        } else {
          Valid++; 
             let lname = document.getElementById("LName").style.border = ""
          errLname.innerText = ""
        }
        if (email == "") {
          let email = document.getElementById("EmailAddress").style.border = "1px solid red"
          errmail.innerText = "Please enter a valid email address"
          errmail.style.color = "red"
    errmail.style.fontWeight = "500"
    Valid--;
        } else {
          Valid++; 
           let email = document.getElementById("EmailAddress").style.border = ""
          errmail.innerText = ""
        }
        if (requestType == null) {
          radioerr.innerText = "Please select a query type"
        radioerr.style.color = "red"
        radioerr.style.fontWeight = "500"
          Valid--;
          
        } else {
          Valid++
        radioerr.innerText = ""
        }
        if (msg == "") {
          let msg = document.getElementById("msginput").style.border = "1px solid red"
          errmsg.innerText = "This field id required"
          errmsg.style.color = "red"
          errmsg.style.fontWeight = "500"
          Valid--;
          
        } else {
        let msg = document.getElementById("msginput").style.border = ""
          errmsg.innerText = ""
          Valid++
        }
        if (!consentcheck.checked) {
          errconsent.innerText = "To submit this form, please consent to being contacted"
           errconsent.style.color = "red"
          errconsent.style.fontWeight = "500"
          Valid--; 
        } else {
          errconsent.innerText = ""
          Valid++
        }
        console.log(Valid)
        if(Valid == 6){
          formDefault();
        }
 }
 