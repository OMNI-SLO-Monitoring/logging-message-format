"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportError = void 0;
const uuid_1 = require("uuid");
const axios_1 = require("axios");
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
exports.reportError = (error, errorMonitorUrl) => {
    if (error.correlationId == null) {
        error.correlationId = uuid_1.v4();
    }
    console.log("reporting error to monitor", error);
    axios_1.default.post(errorMonitorUrl, error)
        .then(res => console.log("Error successfully reported"))
        .catch(err => console.log("Error when reporting error"));
    return error;
};
//# sourceMappingURL=error-reporter.js.map