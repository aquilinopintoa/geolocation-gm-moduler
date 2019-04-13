import routes from "./routes";

import express, {NextFunction} from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev")); // dev seems to be the best option for the console
app.use(express.urlencoded({ extended: false }));

/** successful flow: router => response || NotFound */
app.use(routes);
type ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => any;
// error response handler
app.use((err: any, req: any, res: any, next: any): any => {
    console.log(res)
    return res.send("error");
});

export default app;
