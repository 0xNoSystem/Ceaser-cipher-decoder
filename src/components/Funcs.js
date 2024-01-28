


function cypher_encrypt(message, key){


    message = (message.normalize('NFD').replace(/[\u0300-\u036f]/g, '')).toLowerCase();
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z',' ','.',',',':'
      ];
    
    const digits = [
        '0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9'
      ];

    
    
    let output ="";

    [...message].forEach((letter)=>{
        
        if (alphabet.includes(letter)){
            const letterIndex = alphabet.findIndex((l)=> l === letter);
            
            if (letterIndex + key < 28){
                output += alphabet[letterIndex+key]
            }else{
                output += alphabet[letterIndex + key - 28]
            }
        }else if (digits.includes(letter)){
            const numberIndex = digits.findIndex((num)=> num === letter);
            if (numberIndex + key <= 9){
                output += digits[numberIndex+key]
            }else{
                while (numberIndex+key > 9){
                key = key - 9}
                output += digits[numberIndex + key]
        }
        }else{
            console.log("unreconizable charachter")
        }

    })

    return output

}


function cypher_decrypt(str, key){
    str = str.toLowerCase();
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z',' ','.',',',':'
      ];
    
    const digits = [
        '0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9'
      ];

    
    
    let output ="";

    [...str].forEach((letter)=>{
        
        if (alphabet.includes(letter)){
            const letterIndex = alphabet.findIndex((l)=> l === letter);
            
            if (letterIndex - key >= 0){
                output += alphabet[letterIndex-key]
            }else{
                output += alphabet[letterIndex - key + 29]
            }
        }else if (digits.includes(letter)){
            const numberIndex = digits.findIndex((num)=> num === letter);
            if (numberIndex + key > 0){
                output += digits[numberIndex+key]
            }else{
                while (numberIndex-key < 0){
                key = key + 9}
                output += digits[numberIndex - key]
        }
        }else{
            console.log("unreconizable charachter")
        }

    })

    return output

}



export {cypher_encrypt, cypher_decrypt};