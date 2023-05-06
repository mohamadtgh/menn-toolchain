import { ExpressApp } from "../express/app";
import logger from "../logger";

export class Application {
  private static expressApi: ExpressApp;

  public static async start(): Promise<void> {
    logger("starting api application");

    this.expressApi = new ExpressApp();

    const apiAppError = await this.expressApi.start();

    if (apiAppError) {
      logger(`failed to start Api. \n ${apiAppError}`);
    }

    logger("api application started");
  }
}
