import config from 'config';
import * as jwt from 'jsonwebtoken';

export class BaseController {
  protected getUserIdFromToken(authorization: string) {
    if (!authorization) return null;

    const token = authorization.split(' ')[1];
    const decoded: any = jwt.verify(token, config.get('secret'));
    return decoded.id;
  }
}
