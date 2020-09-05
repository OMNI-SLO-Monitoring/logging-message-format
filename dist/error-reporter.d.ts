import ErrorFormat from "./error-format";
/**
 * reports a ErrorFormat Object to the Error-Monitor
 *
 * If error.correlationId is null, a new correlationId is created.
 * If error.correlationId is not null, the error will be reported with this correlationId
 *
 * @param error that sould be reported to the error monitor
 * @return ErrorFormat that was reported
 */
export declare const reportError: (error: ErrorFormat) => ErrorFormat;
