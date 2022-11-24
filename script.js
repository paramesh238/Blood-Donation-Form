//get the username from the form
var uname = document.getElementById("uname").value;
//get the mail id from the from
var mail = document.getElementById("mail").value;
//get the address from the from
var address = document.getElementById("addr").value;
//get the mobile number from the from
var mob_num = document.getElementById("mobnum").value;
//get the  from the from
var m_health = document.getElementById("m_health").value;
function validate_val(){
    // check whether it is valid or not & name shouldn't be more than 18 characters & minimum 3 characters
    var regex1 = new RegExp(/^[a-zA-Z]{3,18}$/);
    var u1 = regex1.test(uname);
    console.log(u1);
    if(!(regex1.test(uname))){
        alert("Please enter valid username");
    }
    // validate mail id
    var regex2 = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
    if(!(regex2.test(mail))){
        alert("Please enter valid mail id");
    }
    // validate address
    var regex3 = new RegExp(/^[A-Za-z0-9-\\]{28}$/);
    if(!(regex3.test(address))){
        alert("Please enter valid address");
    }
    var regex4 = new RegExp(/^\+?9?\d{10}$/);
    var regex5 = new RegExp(/^[0-9]{10}$/);
    if(!(regex4.test(mob_num))){
        alert("Please enter valid mobile number");
    }else{
        !(regex5.test(mob_num)) ? alert("Please enter valid mobile number") : mob_num;
    }
}

