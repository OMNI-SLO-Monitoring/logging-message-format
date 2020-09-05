import { LogMessageFormat } from "./logging-message-format";
/**
 * ErrorFormat is the format used to report errors the the Error-Monitor.
 * It has a correlationId, that is used to identify correlating errors and a LogMessageFormat, to provide information about the error
 */
export default interface ErrorFormat {
    correlationId: string;
    log: LogMessageFormat;
}
