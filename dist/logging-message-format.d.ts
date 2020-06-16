import { LogType } from "./log-type";
export interface LogMessageFormat {
    type: LogType;
    time: number;
    source: string;
    target: string;
    message: string;
}
