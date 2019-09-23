import { Request, Response, NextFunction, response } from 'express';
// import model from '../models/';

export class DefaultController {
    
  constructor() {}
  
  get(req: Request, res: Response): void {
    res.send("Default get")
  }
  
  create(req: Request, res: Response): void {
    res.send("Default create")    
  }
  
  update(req: Request, res: Response): void {
    res.send("Default update")
  }
  
  delete(req: Request, res: Response): void {
    res.send("Default delete")    
  }
  
}
