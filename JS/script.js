const output = document.querySelector('#output');
 const allButtons = document.querySelectorAll('.button')


allButtons.forEach(singleButton => {

       singleButton.addEventListener("click", function() {
        const buttonText = singleButton.innerText;
        const valueToAdd = buttonText;

        if (valueToAdd === "x^y") {
            valueToAdd = "**";

        }
        else if (valueToAdd === "EXP") {
             valueToAdd = "*10**";
        }

        output.value += valueToAdd;
           

        if (buttonText === "AC") {
            output.value = "";
        }

        else if (buttonText === "DEL") {
            output.value = output.value.slice(0, -1);
        }

         else if (buttonText === "=") {
            output.value = eval(output.value);
        }

        else if(buttonText === "=") {
            try {
                 output.value = eval(output.value);
            }
    
        catch {
        output.value = "error";
        }

    }

    else if (buttonText === "OFF") {
        output.value = "";
        output.style.backgroundColor = "black";
    }

    else {
        output.value += buttonText;
    }
    });
});