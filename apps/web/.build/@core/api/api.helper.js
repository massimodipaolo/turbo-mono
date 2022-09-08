"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.apiHandler = void 0;
require("next");
function apiHandler(handler) {
    return async (request, response) => {
        const method = (request.method || 'GET').toLowerCase();
        // check handler supports HTTP method
        if (!handler[method]) {
            return response.status(405).end(`Method ${request.method} Not Allowed`);
        }
        try {
            // global middleware
            // await jwtMiddleware(request, response);
            // route handler
            await handler[method](request, response);
        }
        catch (error) {
            // global error handler
            errorHandler(error, response);
        }
    };
}
exports.apiHandler = apiHandler;
function errorHandler(error, response) {
    if (typeof (error) === 'string') {
        // custom application error
        const is404 = error.toLowerCase().endsWith('not found');
        const statusCode = is404 ? 404 : 400;
        return response.status(statusCode).json({ message: error });
    }
    if (error.name === 'UnauthorizedError') {
        // jwt authentication error
        return response.status(401).json({ message: 'Invalid Token' });
    }
    // default to 500 server error
    console.error(error);
    return response.status(500).json({ message: error.message });
}
exports.errorHandler = errorHandler;
