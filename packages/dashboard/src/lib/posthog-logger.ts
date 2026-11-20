import posthog from "posthog-js";

type LogAttributes = Record<string, boolean | number | string | undefined>;

export const dashboardLogger = {
  info(body: string, attributes: LogAttributes = {}) {
    posthog.captureLog({ body, level: "info", attributes });
  },
  warn(body: string, attributes: LogAttributes = {}) {
    posthog.captureLog({ body, level: "warning", attributes });
  },
};
