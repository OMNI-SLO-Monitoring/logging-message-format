import { LogMessageFormat } from "./logging-message-format";
export default interface ErrorFormat {
    correlationId: string;
    log: LogMessageFormat;
}
