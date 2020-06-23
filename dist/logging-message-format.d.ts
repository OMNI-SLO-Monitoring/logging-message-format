import { LogType } from "./log-type";
export interface LogMessageFormat {
    time: number;
    source: string;
    detector: string;
    message: string;
    type: LogType;
    data: CpuUtilizationLogData | TimeoutLogData | CbOpenLogData | ErrorLogData;
}
export interface CpuUtilizationLogData {
    cpuUtilization: number;
}
export interface TimeoutLogData {
    timeoutDuration: number;
}
export interface CbOpenLogData {
    openTime: number;
    failedResponses: number;
}
export interface ErrorLogData {
    expected: any;
    result: any;
}
