let firstName = document.getElementById('fnamesub')
let lastName = document.getElementById('lnamesub')
let age = document.getElementById('agesub')
let birth = document.getElementById('bdsub')
let email = document.getElementById('emailsub')
let pass = document.getElementById('passwordsub')
let mobile = document.getElementById('mobilesub')
let Button = document.getElementById('submit')
let male = document.getElementById('male')
let female = document.getElementById('female')


let arr = [];

male.addEventListener('click',function(e){
	
	male.setAttribute('checked', '');
	female.removeAttribute('checked');
});

female.addEventListener('click',function(e){
	
	female.setAttribute('checked', '');
	male.removeAttribute('checked');
	
});

  // if(!firstName.validity.valid){
	     // Button.setAttribute('disabled','');
	  // } 

Button.addEventListener('click',function(){
	
	  var Radio = document.getElementsByName('gender');
	   
	   // console.log(mobile.validity); --> output --> ValidityState {valueMissing: false, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, …}
	  
	  if(firstName.validity.valid && lastName.validity.valid && age.validity.valid && birth.validity.valid && email.validity.valid && pass.validity.valid && mobile.validity.valid){
	 
	      arr.push(firstName.value);
	      arr.push(lastName.value);
	      arr.push(age.value);
	      arr.push(birth.value);
	      arr.push(email.value);
	      arr.push(pass.value);
	      arr.push(mobile.value);
	      
	      if (male.hasAttribute('checked')){
	       arr.push(male.id);
	      }else if (female.hasAttribute('checked')){
	       arr.push(female.id);
	      }
	      
	      window.sessionStorage.stored = (JSON.stringify(arr));
	  }
	
	  
	  
		  
});


		
document.addEventListener('DOMContentLoaded',function(){
	
	if(sessionStorage.getItem("stored") !== null){
          
		  var storedArray = JSON.parse(sessionStorage.getItem("stored"));
		 
		  firstName.value = storedArray[0];
	      lastName.value = storedArray[1];
	      age.value = storedArray[2];
	      birth.value = storedArray[3];
	      email.value = storedArray[4];
	      pass.value = storedArray[5];
	      mobile.value = storedArray[6];
	  
	   if(storedArray[7] === 'male'){
	      male.checked = true;
	      male.setAttribute('checked', '');
	   }else if(storedArray[7] === 'female'){
	      female.checked = true;
	      female.setAttribute('checked', '');
	   }
	   
	}
});		