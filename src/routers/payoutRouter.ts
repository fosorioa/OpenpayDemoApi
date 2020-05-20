import * as Koa from 'koa';
import Router from 'koa-router';
import { PayoutsService } from '../services/payoutsService';

export function init(app: Koa) {
    const router = new Router({ prefix: '/api/payout' });
    const service = new PayoutsService();

    router.post('/customer/:customerId', async (ctx: Koa.Context) => {
        ctx.body = await service.addToCustomer(ctx.params.customerId, ctx.request.body).catch((res) => res);
    });

    router.post('/', async (ctx: Koa.Context) => {
        ctx.body = await service.add(ctx.request.body).catch((res) => res);
    });


    app.use(router.routes());
};