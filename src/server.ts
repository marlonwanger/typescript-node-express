
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet'; 
import * as compression from 'compression';

import DefaultRouter from './routers/DefaultRouter';



// import routes

// server class
class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {

    //config
    this.app.use(bodyParser.urlencoded({ extended: true}));
    this.app.use(bodyParser.json());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.options("*", cors());
  }

  routes(): void {
    
    let router: express.Router;
    router = express.Router();

    this.app.use('/', router);
    this.app.use('/api/v1/default', DefaultRouter);

  }
}

export default new Server().app;