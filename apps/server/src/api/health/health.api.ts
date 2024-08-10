import { Router } from 'express';
import { HealthApiPath } from '~/common/enums/enums';

const initHealthApi = () => {
    const router = Router();

    router.get(HealthApiPath.ROOT, (req, res) => {
        res.send('Hello, world!');
    });

    return router;
};

export { initHealthApi };
