class ApiException extends Error {
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
    
    static forbidden(message) {
        return new ApiException(403, message)
    }

    static bad(message) {
        return new ApiException(404, message)
    }

    static internal(message) {
        return new ApiException(500, message)
    }
}