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
    paddingTop: string | number;
    paddingBottom: string | number;
    paddingLeft: string | number;
    paddingRight: string | number;
    marginTop: string | number;
    marginBottom: string | number;
    marginLeft: string | number;
    marginRight: string | number;
};
