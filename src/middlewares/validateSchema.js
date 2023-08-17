export const validateSchema = (schema) => {
    return (req,res,next) => {
        const validation = schema.validate(req.body,{abortEarly:false});
        if(validation.error){
            res.status(422).send(validation.error.message)
            return
        } else {
            next()
        }
    }
}