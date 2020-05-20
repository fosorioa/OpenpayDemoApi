import { TransfersRepository } from "../repositories/transfersRepository";

export class TransfersService {
    private _repo: TransfersRepository;

    constructor() {
        this._repo = new TransfersRepository();
    }

    public async add(customerId:any, transfer: any): Promise<any> {
        /* */
        return this._repo.insert(customerId, transfer);
    }
}