import ErrorFormat from "./error-format";
/**
 * @param error that sould be reported to the error monitor
 *
 * If error.correlationId is null, a new correlationId is created.
 * If error.correlationId is not null, the error will be reported with this correlationId
 */
export declare const reportError: (error: ErrorFormat) => ErrorFormat;
