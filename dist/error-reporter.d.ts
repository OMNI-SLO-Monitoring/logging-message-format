import ErrorFormat from "./error-format";
/**
 * reports a ErrorFormat Object to the Error-Monitor
 *
 * If error.correlationId is null, a new correlationId is created.
 * If error.correlationId is not null, the error will be reported with this correlationId
 *
 * @param error that should be reported to the error monitor
 * @param errorMonitorUrl the url of the error-monitor, where the error should be send to
 *
 * @return ErrorFormat that was reported
 */
export declare const reportError: (error: ErrorFormat, errorMonitorUrl: any) => ErrorFormat;
