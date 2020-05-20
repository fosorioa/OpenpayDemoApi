import { PayoutsRepository } from "../repositories/payoutsRepository";

export class PayoutsService {
    private _repo: PayoutsRepository;

    constructor() {
        this._repo = new PayoutsRepository();
    }

    public async add(payoutDetail: any): Promise<any> {
        /*
        */
        return this._repo.insert(payoutDetail);
    }

    public async addToCustomer(customerId: any, payoutDetail: any): Promise<any> {
        /*
        */
        return this._repo.insert2(customerId, payoutDetail);
    }
}