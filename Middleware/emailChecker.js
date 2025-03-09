const mwEmailCheckFunc = (req,res,next) => {

    const {email} = req.body;

    if(!email){

        return res.status(400).json('email is required');
        
    }

    if(email){

        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        let isEmailValid = regex.test(email);

        if(!isEmailValid) {
            return res.status(402).json('invaild email')
        }

    }

    next();

}

module.exports = {mwEmailCheckFunc};