function quiz (){
var mark = 0;

for(pos = 0; pos < quizF.q1RB.length; pos++){ 

// the 'for' statment is used to create a loop. — The loop is used to check each corresponding radio button option, in question 1, per iteration. — This is achieved by initially setting the pos variable to 0; then, because the pos variable value is less than 4 (quizF.q1RB.length), the below code it executed. — Each time the loop completes an iteration, the value of pos increases by one, thus moving onto the next Radio-button which corresponds to that value. — This continues until pos  is no longer less than 4, also signalling that all the radio-buttons options have been checked, and in which case the loop ceases; and moves onto the  next code in the sequence. 

currentButton = document.quizF.q1RB [pos];
if(currentButton.checked){
         	if(currentButton.value=="1"){ 
			alert ("Q1. Correct");
			mark = mark + 1;
            } 
			
			if(currentButton.value=="2"){ 
			alert ("Q1. Incorrect");
            } 
			
			if(currentButton.value=="3"){ 
			alert ("Q1. Incorrect");
            } 
			
			if(currentButton.value=="4"){ 
			alert ("Q1. Incorrect");
            } 
		}
}


for(pos = 0; pos < quizF.q2RB.length; pos++){ 
currentButton = quizF.q2RB [pos];
if(currentButton.checked){
         	if(currentButton.value=="1"){ 
			alert ("Q2. Incorrect");
            } 
			
			if(currentButton.value=="2"){ 
			alert ("Q2. Incorrect");
            } 
			
			if(currentButton.value=="3"){ 
			alert ("Q2. Correct");
			mark = mark + 1;
            } 
			
			if(currentButton.value=="4"){ 
			alert ("Q2. Incorrect");
            } 
		}
}


for(pos = 0; pos < quizF.q3RB.length; pos++){ 
currentButton = quizF.q3RB [pos];
if(currentButton.checked){
         	if(currentButton.value=="1"){ 
			alert ("Q3. Incorrect");
            } 
			
			if(currentButton.value=="2"){ 
			alert ("Q3. Correct");
			mark = mark + 1;
            } 
		}
}


for(pos = 0; pos < quizF.q4RB.length; pos++){ 
currentButton = quizF.q4RB [pos];
if(currentButton.checked){
         	if(currentButton.value=="1"){ 
			alert ("Q4. Incorrect");
            } 
			
			if(currentButton.value=="2"){ 
			alert ("Q4. Correct");
			mark = mark + 1;
            } 
			
			if(currentButton.value=="3"){ 
			alert ("Q4. Incorrect");
            } 
			
			if(currentButton.value=="4"){ 
			alert ("Q4. Incorrect");
            } 
		}
}


for(pos = 0; pos < quizF.q5RB.length; pos++){ 
currentButton = quizF.q5RB [pos];
if(currentButton.checked){
         	if(currentButton.value=="1"){ 
			alert ("Q5. Incorrect");
            } 
			
			if(currentButton.value=="2"){ 
			alert ("Q5. Incorrect");
            } 
			
			if(currentButton.value=="3"){ 
			alert ("Q5. Incorrect");
            } 
			
			if(currentButton.value=="4"){ 
			alert ("Q5. Correct");
			mark = mark + 1;
            } 
		}
}

alert ("your mark is " + mark + " / 5");
}
