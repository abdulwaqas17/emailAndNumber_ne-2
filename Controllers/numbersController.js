const fs = require('fs');
const fileName = 'number.json';


// FOR GET PREVIOUS DATA OF []
const getStoredNumber = () => {

   try {
    if(!fs.existsSync(fileName)) {
        return ['+923001234567','+11234567890','+447911123456','0312345678','03001234567']
    }

    const data = fs.readFileSync(fileName,'utf8');
    return JSON.parse(data);

   } catch (err) {
    console.log(err);
    return ['+923001234567','+11234567890','+447911123456','0312345678','03001234567']
   }

}

// RETURN OF getStoredNumber STORE IN THE VARIABLE
let userNumbers = getStoredNumber();

const saveNumbers = (numbers) => {

    try {

        fs.writeFileSync(fileName,JSON.stringify(numbers,null,2),'utf8');

    } catch (err) {

        console.log(err);

    }

}

// **POST Request Handler**
const numberSender = (req,res) => {

    const {number} = req.body;

    if(userNumbers.includes(number))  {
        JSON.status(403).json('this number is already exits')
    }

    userNumbers.push(number);
    saveNumbers(userNumbers);
    console.log(userNumbers);
    res.json({yourNumber : number, message : 'your number is valid'});


}



// FOR GET REQUSET
const allNumbers = (req,res) => {

    res.json({
        message : 'all users number',
        usersNumber : userNumbers

    })

}


module.exports = {numberSender,allNumbers};