import { Request, Response } from "express";
import { RouteHandler } from "./route-handler";

export class MaintenanceHandler extends RouteHandler {
  public handleApiStatus(request: Request, response: Response) {
    response.status(200).json({
      message: "api is up and running!",
      requestHeaders: request.headers,
    });
  }
}
