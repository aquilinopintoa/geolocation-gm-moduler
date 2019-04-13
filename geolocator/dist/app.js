"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = __importDefault(require("./routes"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(morgan_1.default("dev")); // dev seems to be the best option for the console
app.use(express_1.default.urlencoded({ extended: false }));
/** successful flow: router => response || NotFound */
app.use(routes_1.default);
// error response handler
app.use((err, req, res, next) => {
    console.log(res);
    return res.send("error");
});
exports.default = app;
