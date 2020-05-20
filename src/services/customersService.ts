import { CustomersRepository } from "../repositories/customersRepository";

export class CustomersService {
    private _repo: CustomersRepository;

    constructor() {
        this._repo = new CustomersRepository();
    }

    public async getAll(): Promise<any> {
        /*
        */
        return this._repo.getAll();
    }

    public async add(customer: any): Promise<any> {
        /*
        */
        return this._repo.insert(customer);
    }

    public async update(customerId: any, customer: any): Promise<any> {
        /*
        */
        return this._repo.update(customerId, customer);
    }
}