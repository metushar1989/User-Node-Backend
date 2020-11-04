const userService = require('./services');
const { success, catchError, itemNotFound } = require('../utils/apiResponse')
const logTag = `User-Controller`

/**
 * 
 * @param {*} req.body {firstName : string ,lastName: string , email:string, phone:number} 
 * @param {*} res {status:boolean ,success:{code :string,data:object,message:string},error :{message:string,code}}
 * @Request_Type : POST
 */
const createUser = (async (req, res) => {
    try {
        const body = req.body
        console.log(`${logTag} | createUser | body => ${JSON.stringify(body)}`)
        const userResp = await userService.createUser(body);
        if (!userResp) res.send(itemNotFound('User not create'));
        else res.send(success(userResp, `${userResp.firstName} ${userResp.lastName} User Create.`));
    } catch (error) {
        res.send(catchError(error, 500));
    }
})

/**
 *
 * @param {*} req.body {firstName : string ,lastName: string , email:string, phone:number,_id:Object(id)}
 * @param {*} res {status:boolean ,success:{code :string,data:object,message:string},error :{message:string,code}}
 * @Request_Type : PUT
 */
const updateUserById = (async (req, res) => {
    try {
        const body = req.body
        console.log(`${logTag} | updateUserById | body => ${JSON.stringify(body)}`)
        const userResp = await userService.updateUserById(body)
        if (!userResp) res.send(itemNotFound('User not update.'))
        else res.send(success(userResp, 'Update User successfully.'))
    } catch (error) {
        res.send(catchError(error, 500));
    }
})

/**
 *
 * @param {*} req.query {firstName : string ,lastName: string , email:string, phone:number,_id:Object(id)}
 * @param {*} res {status:boolean ,success:{code :string,data:object,message:string},error :{message:string,code}}
 * @Request_Type : GET
 */
const getAllUser = (async (req, res) => {
    try {
        const query = req.query
        if (query._id === undefined) delete query._id
        if (query.firstName === undefined) delete query.firstName
        if (query.lastName === undefined) delete query.lastName
        if (query.email === undefined) delete query.email
        if (query.phone === undefined) delete query.phone

        query.active = true
        const userResp = await userService.findUsers(query)
        console.log(`${logTag} | getAllUser | body => ${JSON.stringify(userResp)}`)
        if (userResp.length === 0) res.send(itemNotFound('No user found.'))
        else res.send(success(userResp, 'User Find successfully.'))
    } catch (error) {
        res.send(catchError(error, 500));
    }
})

/**
 *
 * @param {*} req.query {_id:Object(id)}
 * @param {*} res {status:boolean ,success:{code :string,data:object,message:string},error :{message:string,code}}
 * @Request_Type : PUT
 */
const deleteUser = (async (req, res) => {
    try {
        const body = req.body;
        const userResp = await userService.deleteUser(body.id)
        console.log(`${logTag} | deleteUser | body => ${JSON.stringify(body)}`)
        if (!userResp) res.send(itemNotFound('User not delete.'))
        else res.send(success(userResp, 'User delete successfully.'))
    } catch (error) {
        res.send(catchError(error, 500));
    }
})






module.exports = {
    createUser, updateUserById, getAllUser, deleteUser
};