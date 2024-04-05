import { type Request, type Response, type NextFunction } from "express";
import { ResponseInterface } from "@Typings/response.interface";
import { ControllerFunc } from "@Typings/controller.type";

class ControllerBase {
  protected commonController =
    (controller) =>
    async (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(controller(req, res, next))
        .then((value: ResponseInterface) => {
          console.log(value)
          res.status(value.statusCode).send({
            code: value.statusCode,
            message: value.message,
            data: value.data,
          });
        })
        .catch((error: ResponseInterface) => {
          res.status(error.statusCode).send({
            code: error.statusCode,
            message: error.message,
            data: error.data ?? null,
          });
        });
    };
}

export default ControllerBase;
