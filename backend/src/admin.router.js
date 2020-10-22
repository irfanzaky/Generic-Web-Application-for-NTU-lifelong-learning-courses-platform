import {buildRouter} from "admin-bro-expressjs";

const buildAdminRouter = (admin) => {
    const router = buildRouter(admin);
    return router;
}

export default buildAdminRouter;