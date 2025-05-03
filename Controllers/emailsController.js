const fs = require('fs');
const filePath = 'emails.json'

  

// Emails ko file se read karne ka function
const getStoredEmails = () => {
    try{

        if(!fs.existsSync(filePath)) {

            return ['waqas@gmail.com','zeeshan@gmail.com','anus@gmail.com','hasan@gmail.com','kashan@gmail.com']
             // Agar file exist nahi karti, to ye array return karna

        }

        const data = fs.readFileSync(filePath,'utf8')
        return JSON.parse(data); // File ka data JSON me convert karna


    }catch (err) {

        console.log(err);
        return ['waqas@gmail.com','zeeshan@gmail.com','anus@gmail.com','hasan@gmail.com','kashan@gmail.com']

    }
}


// Emails ko file me save karne ka function
const saveEmails = (emails) => {
    try {
        
        fs.writeFileSync(filePath,JSON.stringify(emails,null,2),'utf8')

    } catch (err) {
        console.log(err);
    }
}


// Pehle se stored emails load karo
let usersEmail = getStoredEmails();



// **POST Request Handler**
const emailSender = (req,res) => {

    const {email} = req.body;

    if (usersEmail.includes(email)){

        return res.status(403).json('this email is already exits');

    }

    // usersEmail.forEach((i)=> {
    //     if(email == i){

    //         return res.status(403).json('this email is already exits');

    //     }
    // })

    usersEmail.push(email);
    saveEmails(usersEmail);
    // console.log(usersEmail);
    res.json({yourEmail : email, message : 'your email is valid'});

}



// Function for get requset 
const allEmails = (req,res) => { // yhn bhi req,res dena zarori h warna nhe chaly ga
    res.json({data : 'all users email',usersEmail:usersEmail})
}

module.exports = {emailSender,allEmails}
