import { ResponseInterface } from "@Typings/response.interface";

class ManagementErrors extends Error {
    code: number;
    message: string;
    data: any;

    constructor(error: ResponseInterface) {
        super(error.message)

        this.code = error.statusCode;
        this.data = error.data ? error.data : null;
        this.message = error.message;
    }
}

export default ManagementErrors;
