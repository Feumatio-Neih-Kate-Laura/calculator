function convertToBinary(digit) {
    let decimalNumber = parseInt(digit, 10);
    let Result = decimalNumber.toString(2);
    return Result.padStart(3, '0');
}

function convertToHex(digit) {
    let decimalNumber = parseInt(digit, 10);
    let Result = decimalNumber.toString(16).toUpperCase();
    return Result.padStart(1, '0');
}

function convertToOctal(digit) {
    let decimalNumber = parseInt(digit, 10);
    let Result = decimalNumber.toString(8);
    return Result.padStart(3, '0');
}

const output = document.querySelector('#output');
const allButtons = document.querySelectorAll('.btn');

allButtons.forEach(singleButton => {
    singleButton.addEventListener("click", function() {
        const buttonText = singleButton.innerText;
        let valueToAdd = buttonText;

             if (buttonText !== "OFF" && output.style.background === "black") {
            output.style.background = "linear-gradient(135deg, rgb(15, 32, 67), rgb(28, 59, 115))";
        }

         
        if (buttonText === "AC") {
            output.value = "";
            return;
        }

        if (buttonText === "DEL") {
            output.value = output.value.slice(0, -1);
            return;
        }

        if (buttonText === "OFF") {
            output.value = "";
            output.style.background = "black";
            return;
        }

        
        if (buttonText === "=") {
            output.style.background = "orange";
            try {
                let currentValue = output.value;

                
                if (currentValue.includes("Bin")) {
                    currentValue = currentValue.replace(/Bin(\d+)/gi, function(match, group1) {
                        return convertToBinary(group1);
                    });

                    currentValue = currentValue.replace(/(\d+)Bin/gi, function(match, group1) {
                        return convertToBinary(group1);
                    });

                    
                    output.value = currentValue;
                    return;
                }

                  if (currentValue.includes("Hex")) {
                    currentValue = currentValue.replace(/Hex(\d+)/gi, function(match, group1) {
                        return convertToHex(group1);
                    });

                    currentValue = currentValue.replace(/(\d+)Hex/gi, function(match, group1) {
                        return convertToHex(group1);
                    });

                    
                    output.value = currentValue;
                    return;
                }

              if (currentValue.includes("Oct")) {
                    currentValue = currentValue.replace(/Oct(\d+)/gi, function(match, group1) {
                        return convertToOctal(group1);
                    });

                    currentValue = currentValue.replace(/(\d+)Oct/gi, function(match, group1) {
                        return convertToOctal(group1);
                    });

                    
                    output.value = currentValue;
                    return;
                }

                
                currentValue = currentValue.replace(/×/g, "*");
                currentValue = currentValue.replace(/−/g, "-");
                currentValue = currentValue.replace(/÷/g, "/");
                currentValue = currentValue.replace(/π/g, "Math.PI");
                currentValue = currentValue.replace(/x²/g, "**2");
                
                currentValue = currentValue.replace(/√(\d+\.?\d*)/g, "Math.sqrt($1)");
                currentValue = currentValue.replace(/(\d+\.?\d*)√/g, "Math.sqrt($1)");

                output.value = eval(currentValue);
            }
            catch (error) {
                output.value = "Error";
            }
            return;
        }

        
        if (valueToAdd === "x²") {
            valueToAdd = "²"; 
        }
        else if (valueToAdd === "EXP") {
            valueToAdd = "*10**";
        }

    else if (valueToAdd === "sin" || valueToAdd === "cos" || valueToAdd ==="tan"
        || valueToAdd === "log" || valueToAdd === "ln") {
            valueToAdd +=   "(";
        }

        
    

        
        output.value += valueToAdd;
    });
});