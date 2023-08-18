import { Injectable } from '@nestjs/common';
import { getTimestamp } from './utils/utils.timestamp';
import ngrok from 'ngrok';
import request from 'request';

// Interface for the request body
interface STKPushRequestBody {
  amount: number;
  phone: string;
  Order_ID: string;
}

@Injectable()
export class DonationsService {
  async initiateSTKPush(req: any, res: any) {
    try {
      const { amount, phone, Order_ID } = req.body as STKPushRequestBody;
      const url =
        'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
      const auth = 'Bearer ' + req.safaricom_access_token;

      const timestamp = getTimestamp();
      const password = Buffer.from(
        process.env.BUSINESS_SHORT_CODE + process.env.PASS_KEY + timestamp,
      ).toString('base64');

      const callback_url = await ngrok.connect({ addr: process.env.PORT });
      const api = await ngrok.getApi();
      await api.listTunnels();

      console.log('callback ', callback_url);
      // return new Promise((resolve, reject) => {
      request(
        {
          url: url,
          method: 'POST',
          headers: {
            Authorization: auth,
          },
          json: {
            BusinessShortCode: process.env.BUSINESS_SHORT_CODE,
            Password: password,
            Timestamp: timestamp,
            TransactionType: 'CustomerPayBillOnline',
            Amount: amount,
            PartyA: phone,
            PartyB: process.env.BUSINESS_SHORT_CODE,
            PhoneNumber: phone,
            CallBackURL: `${callback_url}/api/stkPushCallback/${Order_ID}`,
            AccountReference: 'Wamaitha Online Shop',
            TransactionDesc: 'Paid online',
          },
        },
        function (e, response, body) {
          if (e) {
            console.error(e);
            res.status(503).send({
              message: 'Error with the stk push',
              error: e,
            });
          } else {
            // resolve(body);
            res.status(200).json(body);
          }
        },
      );
      // });
    } catch (e) {
      console.error('Error while trying to create LipaNaMpesa details', e);
      res.status(503).send({
        message:
          'Something went wrong while trying to create LipaNaMpesa details. Contact admin',
        error: e,
      });
    }
  }
}
