//this fucntion validates username
function validate_username(){

	var uname=document.signup.username;
	var uformat=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //regExpresion
	
	//check if the input is empty
	if(uname.value==""){
		alert("Email Address Require");
	}
	//if not check this condition
	else{
		//if criteria match focus will be on password
		if(uname.value.match(uformat)){
			//check if the length is not more than 56
			if(uname.value.length<=56){
				document.signup.password.focus();
				return true;
			}else{
				//if it dosen't match then it will alert this error
				alert("Email address should not be more than 56");
				uname.focus();
				return false;
			}
		}
		//if it dosen't match then it will alert this error
		else{
			alert("Invalid Email Address");
			uname.focus();
			return false;
		}
	}
}
function validate_pswd(){
	var pass1=document.signup.password;
	var pass2=document.signup.repassword;
	//var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

	if(pass1.value!="" && pass1.value==pass2.value){
		if(pass1.value.length<6){
			alert("Error: Password must contain at least six characters!");
			pass1.focus();
			return false;	
		}
		//return true;
	}else{
		alert("Please check if the password's are match!");
		pass1.focus();
		return false;
	}
	//alert("You entered a valid password: "+pass1.value);
	return true;
}

//this function is for First name validation
function validate_fname(){
	var fname=document.signup.name;
	var check_fname=/^[A-Za-z]{3,50}$/;

	if(fname.value.match(check_fname)){
		//if criteria match focus will be on last name
		document.signup.lname.focus();
		return true;
	}else{
		//if it dosen't match then it will alert this error
		alert("First name must have atleast 3-50 character");
		fname.focus();
		return false;
	}
}
/*
function validate_dob(dob){
	var today= new Date();
	var bdate= new Date(dob);
	var age=today.getFullYear() - bdate.getFullYear();
	var m=today.getMonth() - bdate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < bdate.getDate())) {
        age--;
        alert("check");
    }    
    return age;
}*/
