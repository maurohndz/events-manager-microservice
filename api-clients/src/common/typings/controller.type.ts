import { type Request, type Response, type NextFunction } from 'express';
import { ResponseInterface } from '@Typings/response.interface';

export type ControllerFunc = (
  req: Request,
  res?: Response,
  next?: NextFunction
) => Promise<ResponseInterface>;
