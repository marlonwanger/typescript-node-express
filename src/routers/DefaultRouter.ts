import { Router } from 'express';
import { DefaultController } from '../controllers/DefaultController';


class DefaultRouter {
  router: Router;
  DefaultController: DefaultController;

  constructor() {
    this.router = Router();
    this.DefaultController = new DefaultController();
    this.routesLoader();
  }

  routesLoader(): void {

    this.router.get('/', (request, response) => {
      this.DefaultController.get(request, response);
    });

  }
}

const defaultRouter: any = new DefaultRouter();
defaultRouter.routesLoader();

export default defaultRouter.router;
