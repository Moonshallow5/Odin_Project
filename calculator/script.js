const display=document.getElementById("display")
currentInput=""
previousInput=null
operator=null
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        const originalColor = button.style.backgroundColor; // Store the original color
        button.style.backgroundColor = "#ffcc00"; // Set to highlight color (e.g., yellow)
        setTimeout(() => {
            button.style.backgroundColor = originalColor; // Revert to the original color after delay
        }, 20); // Adjust the delay time as neede
        const value=button.dataset.value

        if(value=="C"){
            clearDisplay()
        }
        else if (value === "=") {
            calculate();
        }
        else if (["+", "-", "*", "/"].includes(value)) {
            setOperator(value);
        }
        else{
            updateDisplay(value)

        }

    });
});
        function updateDisplay(value) {
            
            currentInput += value;
            display.innerText = currentInput;
            console.log("hey")
        }
        function clearDisplay(){
            currentInput=""
            previousInput=""
            operator=null

            display.innerText="0"
        }

        function setOperator(op){

            if (previousInput !== null && operator) {
                // Automatically calculate result if there was a previous input and operator
                calculate();
            } else {
                // Store the current input as the previous input if it's the first operator
                previousInput = currentInput;
            }
        
            operator = op;
            currentInput = "";
        }

        function calculate(){
            if (!operator || currentInput === "" || previousInput === null) {
                return;}

            const a = parseFloat(previousInput);
            const b = parseFloat(currentInput);
            console.log(currentInput)
            
            if(operator=='+'){
                result= a+b
            }
            else if(operator=='-'){
                result=a-b
            }
            else if(operator=='*'){
                result=a*b
            }
            else if(operator=='/' ){
                if(b!=0){
                result=(a/b).toFixed(2)
                }
                else{
                    console.log("0 divide")
                    result=0
                }
            }
            
            display.innerText=result
            currentInput=result
            previousInput=result
            operator=null
        }