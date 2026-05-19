import { Request, Response } from 'express';

export const listAllTickets = (req: Request, res: Response) => {
  res.status(501).json({ error: 'Not implemented' });
};
