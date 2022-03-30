import { Request as IRequest } from 'express';
import { User } from './dto';

declare module 'express' {
  interface Request extends IRequest {
    user: User;
  }
}
