import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express, { Express } from "express";
import logger from "../logger";
import { TNullableError } from "../types";
import { IExpressSettings } from "./app-interface";
import { ApiV1MaintenanceRouter } from "./routes/api/v1/maintenance-router";

export class ExpressApp {
  private expressApp: Express;

  public constructor() {
    this.expressApp = express();
  }

  public async start(): Promise<TNullableError> {
    this.configure();
    return this.startApi();
  }

  private configure(): void {
    this.applyMiddleWares();
    this.assignRoutes();
  }

  private async startApi(): Promise<TNullableError> {
    return new Promise<TNullableError>((resolve, reject) => {
      try {
        const { port, hostName } = this.getSettings();
        this.expressApp.listen(port, hostName, () => {
          logger(`express has started successfully on ${hostName}:${port}`);
          resolve(null);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  private getSettings(): IExpressSettings {
    const { API_PORT = 0, API_HOST = "" } = process.env;

    return {
      port: Number(API_PORT),
      hostName: API_HOST,
    };
  }

  private applyMiddleWares(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(cookieParser());
  }

  private assignRoutes(): void {
    new ApiV1MaintenanceRouter().assign(this.expressApp);
  }
}
