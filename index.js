// const name= document.getElementById("username");
// const email = document.getElementById("emailId");
// const phone = document.getElementById("mobile");

// let validEmail = false;
// let validPhone = false;
// let validUser = false;

// $('#failure').hide();
// $('#success').hide();

// name.addeventListener('blur', ()=>
// )

const Name = document.getElementById('username');
const email = document.getElementById('emailId');
const phone = document.getElementById('mobile');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();

Name.addEventListener('blur', ()=>{
        console.log("name is blurred");// Validate the user name here 
        let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
        let str = Name.value;
        console.log(regex, str);

            if(regex.test(str))
            {
                console.log('Your name is valid');
                Name.classList.remove('is-invalid');
                validUser = true;
            }
            else{
            console.log('Your name is not valid');
            Name.classList.add('is-invalid');
            validUser = false;
}})


email.addEventListener('blur', ()=>{
            console.log("email is blurred");// Validate the user email here 
            let regex =/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
            let str = email.value;
            console.log(regex, str);
                if(regex.test(str))
                {
                  console.log('Your email is valid');
                  email.classList.remove('is-invalid');
                  validEmail = true;
                }
                else
                {
                  console.log('Your email is not valid');
                  email.classList.add('is-invalid');
                  validEmail = false;
}})


phone.addEventListener('blur', ()=>{
            console.log("phone is blurred");// Validate the user phone here
            let regex = /^([0-9]){10}$/;
            let str = phone.value;
            console.log(regex, str);
                if(regex.test(str))
                {
                 console.log('Your phone is valid');
                 phone.classList.remove('is-invalid');
                 validPhone = true;
                }
                else
                {
                 console.log('Your phone is not valid');
                 phone.classList.add('is-invalid');
                 validPhone = false;
}})


let submit = document.getElementById('submit');
    submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);// Submit your form here
     if(validEmail && validUser && validPhone)
        {
            let failure = document.getElementById('failure');
            console.log('Phone, email and user are valid. Submitting the form');
            let success = document.getElementById('success');
            success.classList.add('show');
            $('#failure').hide();
            $('#success').show();
        }
        else
        {
            console.log('One of Phone, email or user are not valid. Hence notsubmitting the form. Please correct the errors and try again');
            let failure = document.getElementById('failure');
            failure.classList.add('show');$('#success').hide();
            $('#failure').show();
}})


