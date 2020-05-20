import * as PaymentProvider from './paymentProvider';

export class PayoutsRepository {
    private openPay = PaymentProvider.create();

    constructor() {
    }

    public async insert(payoutDetail: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.openPay.payouts.create(payoutDetail, function (error: any, body: any, response: any) {

                if (response.statusCode == 200 || response.statusCode == 201) {
                    resolve(body);
                }
                else {
                    console.error(error);
                    reject(error);
                }
            });
        });
    }

    public async insert2(customerId: any, payoutDetail: any): Promise<any> {
        // console.log(customerId);
        // console.log(payoutDetail);
        return new Promise((resolve: any, reject: any) => {
            this.openPay.customers.payouts.create(customerId, payoutDetail, function (error: any, body: any, response: any) {

                if (response.statusCode == 200 || response.statusCode == 201) {
                    resolve(body);
                }
                else {
                    console.error(error);
                    reject(error);
                }
            });
        });
    }

    /*
      public async update(book: Book): Promise<Book> {
      }
    
      public async delete(id: number): Promise<void> {
      }
    */
}
