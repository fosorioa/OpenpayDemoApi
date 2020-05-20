import * as PaymentProvider from './paymentProvider';

export class BankAccountsRepository {
    private openPay = PaymentProvider.create();

    constructor() {
    }

    public async insert(customerId: any, accountDetails:any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            this.openPay.customers.bankaccounts.create(customerId, accountDetails, function (error: any, body: any, response: any) {

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
