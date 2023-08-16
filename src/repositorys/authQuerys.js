export const registerQuery = `INSERT INTO users(email,username,password,"picture")
 values ($1,$2,$3,$4)`

 export const  getUserDataQuery = "SELECT * from users WHERE email = $1"

 export const getSessionExistQuery = `select * from sessions WHERE "userId" = $1`

 export const loginQuery = `insert into sessions(token,"userId") values ($1,$2)`