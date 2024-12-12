import bcrypt from "bcryptjs"

async function verifyPassword(){
    try {
        let hashValue = "$2a$10$TSRqhHXuGLMIDirOnxBqsuLb747oURv9zxd.loVUSQsn6uL9h8.mG"
        let userPassword = "ismail1234"
        let verify = await bcrypt.compare(userPassword,hashValue)
        console.log(verify);
    } catch (error) {
    console.log(error);
        
    }
}
verifyPassword()