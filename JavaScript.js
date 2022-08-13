function quiz (){
var mark = 0;

for(pos = 0; pos < quizF.q1RB.length; pos++){ 

//the 'for' statment is used to create a loop. the loop is useful becasue it allows someone to redo the test without refreshing the page. this is acheived by always resetting the pos variable to 0 at the start of every iteration. because pos is less than 4 (quizF.q1RB.length), the command executes

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