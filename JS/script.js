const output = document.querySelector('#output');
 const allButtons = document.querySelectorAll('.button')


allButtons.forEach(singleButton => {

       singleButton.addEventListener("click", function() {
        const buttonText = singleButton.innerText;
        const valueToAdd = buttonText;

        if (valueToAdd === "^") {
            valueToAdd = "**";
             return;

        }
        else if (valueToAdd === "EXP") {
             valueToAdd = "*10**";
              return;
        }

       
           

        if (buttonText === "AC") {
            output.value = "";
             return;
        }

        else if (buttonText === "DEL") {
            output.value = output.value.slice(0, -1);
             return;
        }

       

        

    else if (buttonText === "OFF") {
        output.value = "";
        output.style.backgroundColor = "black";
         return;
    }
   

    else if(buttonText === "ON"){
        output.style.backgroundColor = "rgb(57, 164, 231)"
         return;
    }

    else if (buttonText === "=") {

        try {
            let currentValue = output.value;

            currentValue = currentValue.replace(/√(\d+\.?\d*)/g, "Math.sqrt($1)");

             currentValue = currentValue.replace(/(\d+\.?\d*)√/g, "Math.sqrt($1)");

            output.value = eval(currentValue);
        }
        
       catch {
        output.value = "Error";
       }
    }

    else {
        output.value += buttonText;
         return;
    }
    });
});


