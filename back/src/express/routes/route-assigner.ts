import { Express, Router } from "express";

export abstract class RouteAssigner {
  private readonly expressRouter: Router;

  protected abstract assignGETRoutes(router: Router): void;
  protected abstract assignPOSTRoutes(router: Router): void;

  public constructor() {
    this.expressRouter = Router();
  }

  public assign(express: Express): void {
    this.assignGETRoutes(this.expressRouter);
    this.assignPOSTRoutes(this.expressRouter);

    express.use(this.getRouterPrefix(), this.expressRouter);
  }

  protected getRouterPrefix(): string {
    return "";
  }
}
