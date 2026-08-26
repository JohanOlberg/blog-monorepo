export declare function toHTTPError(error: unknown): {
    statusCode: number;
    error: string;
    message: string;
    issues: {
        path: string;
        message: string;
    }[];
} | {
    statusCode: number;
    error: string;
    message: string;
    issues?: never;
};
//# sourceMappingURL=map-error-to-http.d.ts.map