import * as Sentry from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
    dsn: "https://6787673a8e9b85070def8a33c0b4d5e8@o4509045474787328.ingest.de.sentry.io/4509054480941136",
    integrations: [
        nodeProfilingIntegration(),
        Sentry.mongooseIntegration()
    ],
});

Sentry.profiler.startProfiler();

Sentry.startSpan({
    name: "My First Transaction",
}, () => {
    // the code executing inside the transaction will be wrapped in a span and profiled
});

Sentry.profiler.stopProfiler();