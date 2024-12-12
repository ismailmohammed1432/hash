import bcrypt from "bcryptjs"

async function hashPassword(){
    try {
       let userPassword = "ismail1234"
       let hashValue = await bcrypt.hash(userPassword, 2)
       console.log(hashValue);
    } catch (error){
        console.log(error);
}
}
hashPassword()

