import { Request, Response, Router } from "express";
import { MaintenanceHandler } from "../../../handlers/maintenance-handler";
import { RouteAssigner } from "../../route-assigner";

export class ApiV1MaintenanceRouter extends RouteAssigner {
  private readonly handler: MaintenanceHandler;

  public constructor() {
    super();
    this.handler = new MaintenanceHandler();
  }

  protected assignGETRoutes(router: Router): void {
    router.get("/status", (request: Request, response: Response) => {
      this.handler.handleApiStatus(request, response);
    });
  }
  protected assignPOSTRoutes(router: Router): void {}

  protected getRouterPrefix(): string {
    return "/api/v1";
  }
}
