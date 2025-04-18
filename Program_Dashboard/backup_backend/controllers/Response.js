function Response(status, data, message, res) {
    res.status(status).json({
        status,
        data,
        message,
    });
}

module.exports = Response;










// const response = (statusCode, data, message, res) => {
//     res.json(statusCode, [
//         {
//             payload:{
//                 data,
//                 message,
//             },
//             metadata: {
//                 prev: "",
//                 next: "",
//                 current: "",
//             },
//         },
//     ])
// }


// module.exports = response;
// const response = (statusCode, data, message, res) => {
//     res.status(statusCode).json({
//         payload : {
//             status_code: statusCode,
//             datas: data,
//             message: message
//         },
//         metadata: {
//             prev: "",
//             next: "",
//             max: ""
//         }
//     })
// }

// module.exports = response;
