const success = (data, message) => {
    return {
        status: true,
        success: {
            data: data,
            message: message,
            code: 200,
        },
        error: null,
    }
}

const itemNotFound = message => {
    return ({
        status: true,
        success: {
            data: [],
            message: message,
            code: 204,
        },
        error: null
    })
}

const catchError = error => {
    return ({
        status: false,
        success: null,
        error: {
            error: error._message,
            code: 500,
        }
    })
}


const errorApi = (error, code) => {
    return {
        status: false,
        success: null,
        error: {
            error: error,
            code: code,
        }
    }
}

module.exports = {
    success,
    catchError,
    errorApi, itemNotFound
}
