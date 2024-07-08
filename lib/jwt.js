import jwt from 'jsonwebtoken'

const secret = 'secret';
const JWT = {
    sign: (payload) => {
        jwt.sign(payload, secret, { expiresIn: '24h' })
    },
    verify: (token) => {
        try {
            const payload = jwt.verify(token, secret);
            return payload;
        } catch (error) {
            return null;
        }
    }
}
export default JWT;