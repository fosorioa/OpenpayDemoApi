import * as Koa from 'koa';
import Router from 'koa-router';
import { CustomersService } from '../services/customersService';

export function init(app: Koa) {
    const router = new Router({ prefix: '/api/client' });
    const service = new CustomersService();

    router.get('/', async (ctx: Koa.Context) => {
        ctx.body = await service.getAll().catch((res) => res);
    });

    router.post('/', async (ctx: Koa.Context) => {
        ctx.body = await service.add(ctx.request.body).catch((res) => res);
    });

    router.put('/:customerId', async (ctx: Koa.Context) => {
        ctx.body = await service.update(ctx.params.customerId, ctx.request.body).catch((res) => res);
    });

    app.use(router.routes());
};