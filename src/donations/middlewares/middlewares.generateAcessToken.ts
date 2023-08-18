import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import request from 'request';
import 'dotenv/config';

@Injectable()
export class AccessTokenMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const url =
        'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
      const auth = Buffer.from(
        `${process.env.SAFARICOM_CONSUMER_KEY}:${process.env.SAFARICOM_CONSUMER_SECRET}`,
      ).toString('base64');

      request(
        {
          url: url,
          headers: {
            Authorization: 'Basic ' + auth,
          },
        },
        (error, response, body) => {
          if (error) {
            res.status(401).send({
              message:
                'Something went wrong when trying to process your payment',
              error: error.message,
            });
          } else {
            req.safaricom_access_token = JSON.parse(body).access_token;
            next();
          }
        },
      );
    } catch (error) {
      console.error('Access token error ', error);
      res.status(401).send({
        message: 'Something went wrong when trying to process your payment',
        error: error.message,
      });
    }
  }
}
