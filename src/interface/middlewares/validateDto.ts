import { Request, Response, NextFunction } from 'express';

export const validateDto = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
  // placeholder: run validation
  return next();
};
