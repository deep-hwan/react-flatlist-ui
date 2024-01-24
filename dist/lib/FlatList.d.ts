import React, { HTMLAttributes, ReactElement } from "react";
import { SpaceType } from "../themes/space";
import { ViewportTypes } from "../themes/viewport";
interface Props extends HTMLAttributes<HTMLUListElement>, SpaceType {
    data: any[];
    dataCount?: number;
    itemHorizontalCount?: {
        desktop?: number;
        tablet?: number;
        mobile?: number;
    };
    keyExtractor: (item?: any, index?: number) => string | number;
    renderItem: (item?: any, index?: number) => ReactElement;
    ItemSeparatorComponent?: ReactElement;
    ListEmptyComponent?: ReactElement;
    size?: ViewportTypes;
    listScrollbarView?: boolean;
    itemGap?: number;
    itemCrossGap?: number;
    direction?: "horizontal" | "vertical";
    display?: {
        reverse?: boolean;
        align?: "start" | "end" | "center" | "stretch";
        crossAlign?: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly";
        wrap?: "nowrap" | "wrap" | "wrap-reverse";
    };
}
export declare const FlatList: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLUListElement>>;
export {};
