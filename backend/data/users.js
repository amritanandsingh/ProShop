import bcrypt from 'bcryptjs';

const user = [
    {
        name:'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456' , 10 ),
        isAdmin: true
    },
    {
        name:'A User',
        email: 'a@email.com',
        password: bcrypt.hashSync('123456' , 10 ),
        isAdmin: false
    },
    {
        name:'Admin User',
        email: 'b@email.com',
        password: bcrypt.hashSync('123456' , 10 ),
        isAdmin: false
    }
]
export default user;