export interface SpaceType {
    padding?: {
        all?: number | string;
        horizontal?: number | string;
        vertical?: number | string;
        top?: number | string;
        bottom?: number | string;
        left?: number | string;
        right?: number | string;
    };
    margin?: {
        all?: number | string;
        horizontal?: number | string;
        vertical?: number | string;
        top?: number | string;
        bottom?: number | string;
        left?: number | string;
        right?: number | string;
    };
}
export declare const SpaceTheme: ({ padding, margin }: SpaceType) => {
    paddingTop: string | number | undefined;
    paddingBottom: string | number | undefined;
    paddingLeft: string | number | undefined;
    paddingRight: string | number | undefined;
    marginTop: string | number | undefined;
    marginBottom: string | number | undefined;
    marginLeft: string | number | undefined;
    marginRight: string | number | undefined;
};
