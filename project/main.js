const scriptURL = 'https://script.google.com/macros/s/AKfycbz_m0g0Z7v89BKb1T57o92AXMD1M112sOyGJ0KWBdwTHeE-63__A5EGCv_8j2-0HyBJ/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML="Message Sent Successfully"
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})