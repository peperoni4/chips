import { Router } from 'express';
import { initHealthApi } from './health/health.api';
import { ApiPath } from '~/common/enums/enums';

const registerRoutes = () => {
    const router = Router();

    router.use(ApiPath.HEALTH, initHealthApi());

    return router;
};

export { registerRoutes };
