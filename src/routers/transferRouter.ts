import * as Koa from 'koa';
import Router from 'koa-router';
import { TransfersService } from '../services/transfersService';

export function init(app: Koa) {
    const router = new Router({ prefix: '/api/transfer' });
    const service = new TransfersService();

    router.post('/:customerId', async (ctx: Koa.Context) => {
        ctx.body = await service.add(ctx.params.customerId, ctx.request.body).catch((res: any) => res);
    });

    app.use(router.routes());
};