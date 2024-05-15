import { type Request, type Response, type NextFunction } from "express";
import { ResponseInterface } from "@Typings/response.interface";
import { ControllerFunc } from "@Typings/controller.type";
import { SERVER_ERROR } from '@Messages/error.messages';
import { Prisma } from "@prisma/client";
import ManagementErrors from "@Tools/ManagementErrors";

class ControllerBase {
  protected commonController =
    (controller) =>
    async (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(controller(req, res, next))
        .then((value: ResponseInterface) => {

          res.status(value.statusCode).send({
            code: value.statusCode,
            message: value.message,
            data: value.data,
          });
        })
        .catch((error) => {
          let errorResponse : ManagementErrors = null;

          if (error instanceof ManagementErrors) {
            errorResponse = error;
          } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
            errorResponse = new ManagementErrors(SERVER_ERROR);
          }

          res.status(errorResponse.code).send({
            code: errorResponse.code,
            message: errorResponse.message,
            data: errorResponse.data,
          });
        });
    };
}

export default ControllerBase;
