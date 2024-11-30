function passwordReset(input){
    let password = input.shift();
    let command = input.shift();
    let newRawPass = "";
    while(command !== "Done"){
        let commandInfo = command.split(" ");
        let action = commandInfo[0];

       if(action === "TakeOdd"){
        for(let i = 1; i < password.length; i +=2){
            newRawPass += password[i];
 
        }
        console.log(newRawPass);

       } else if(action === "Cut"){
        let index = +commandInfo[1];
        let length = +commandInfo[2];
        if(index >= 0 && index < newRawPass.length && index + length <= newRawPass.length ){
            let subs =newRawPass.substring(index, index + length );
            newRawPass =newRawPass.replace(subs, "");
            console.log(newRawPass);
            
        }

       } else if(action === "Substitute"){
        let substr = commandInfo[1]
        let substitute = commandInfo[2]

        if(newRawPass.includes(substr)){

            while(newRawPass.includes(substr)){
            newRawPass = newRawPass.replace(substr, substitute);
            }
            console.log(newRawPass);
            
        } else {
            console.log("Nothing to replace!");
            
        }
       }

        command = input.shift();
    }
    console.log(`Your password is: ${newRawPass}`);
    
    
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",

    "TakeOdd",
    
    "Cut 18 2",
    
    "Substitute ! ***",
    
    "Substitute ? .!.",
    
    "Done"]);