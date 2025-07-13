const Message = require("./Message"); // Adjust the path if needed

const sendResponse = {};

/**
 * Sends a standardized success response
 * 
 * @param {Object} res - Express response object
 * @param {String} message - Message to send (default: somethingWentWrong)
 * @param {Object|null} data - Optional data payload
 * @param {Number} statusCode - HTTP status code (default: 200)
 */
sendResponse.success = (res, message = Message.somethingWentWrong, data = null, statusCode = 200) => {
    const response = {
        success: true,
        message,
    };

    if (data !== null) {
        response.data = data;
    }

    return res.status(statusCode).json(response);
};

/**
 * Sends a standardized error response
 * 
 * @param {Object} res - Express response object
 * @param {String} message - Error message (default: somethingWentWrong)
 * @param {Object|null} error - Optional error object
 * @param {Number} statusCode - HTTP status code (default: 400)
 */
sendResponse.error = (res, message = Message.somethingWentWrong, error = null, statusCode = 400) => {
    const response = {
        success: false,
        message,
    };

    if (error !== null) {
        response.error = error;
    }

    return res.status(statusCode).json(response);
};

module.exports = sendResponse;
