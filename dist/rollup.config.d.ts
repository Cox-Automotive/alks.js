declare const _default: ({
    input: string;
    output: {
        file: any;
        format: string;
        name: string;
        exports: string;
        intro: string;
        outro: string;
        dir?: undefined;
    };
    plugins: import("rollup").Plugin<any>[];
} | {
    input: string;
    output: {
        dir: string;
        format: string;
        exports: string;
        file?: undefined;
        name?: undefined;
        intro?: undefined;
        outro?: undefined;
    };
    plugins: import("rollup").Plugin<any>[];
} | {
    input: string;
    output: {
        file: any;
        format: string;
        exports: string;
        name?: undefined;
        intro?: undefined;
        outro?: undefined;
        dir?: undefined;
    };
    plugins: import("rollup").Plugin<any>[];
})[];
export default _default;
