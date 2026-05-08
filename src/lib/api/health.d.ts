type HealthResponse = {
    status: string;
    timestamp?: string;
};
export declare const getHealth: () => Promise<HealthResponse>;
export {};
