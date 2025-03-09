const mwNumCheckFunc = (req,res,next) => {

    const {number} = req.body;

    if (!number) {
        return res.status(400).json('number is required')
    }

    if (number) {

        // for pak number
        let regex = /^(?:\+92|0)[3-9][0-9]{9}$/;
        let isNumValid = regex.test(number);

        if(!isNumValid) {
            return res.status(402).json('kindly insert valid number')
        }

    }

    next();
}

module.exports = {mwNumCheckFunc};