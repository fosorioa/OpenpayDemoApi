import Koa from 'koa';

import * as transferRouter from './routers/transferRouter';
import * as customerRouter from './routers/customerRouter';
import * as bankAccountRouter from './routers/bankAccountRouter';
import * as payoutRouter from './routers/payoutRouter';

import bodyParser from 'koa-bodyparser';
import json from 'koa-json';

const app = new Koa();
const port:any = process.env.PORT || 80;

app.use(bodyParser());

app.use(json());

transferRouter.init(app);

customerRouter.init(app);

bankAccountRouter.init(app);

payoutRouter.init(app);

app.listen(port, () => console.log('Server running in port ' + port));  