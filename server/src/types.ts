import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { Response } from "express"; // import request

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: any; //Request & { session: Express.Session };
  res: Response;
};
