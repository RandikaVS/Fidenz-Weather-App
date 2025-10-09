const sendResponse = (res, statusCode, success, data = {}, message) => {
    const response = {
      success,
      data,
      message,
    };
    return res.status(statusCode).json(response);
  };
  
module.exports = sendResponse;
  