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
            try {
                let currentValue = output.value;

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

        
        output.value += valueToAdd;
    });
});