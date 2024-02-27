import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactElement,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SpaceTheme, SpaceType } from "../themes/space";
import { ViewportTypes } from "../themes/viewport";

interface Props extends HTMLAttributes<HTMLUListElement>, SpaceType {
  data: any[];
  loading?: boolean;
  dataCount?: number;
  itemHorizontalCount?: { desktop?: number; tablet?: number; mobile?: number };
  keyExtractor: (item?: any, index?: number) => string | number;
  renderItem: (item?: any, index?: number) => ReactElement;
  ListFooterComponent?: ReactElement;
  ItemSeparatorComponent?: ReactElement;
  ListHeaderComponent?: ReactElement;
  ListEmptyComponent?: ReactElement;
  ListLoadingComponent?: ReactElement;
  size?: ViewportTypes;
  listScrollbarView?: boolean;
  listScrollActive?: boolean;
  itemGap?: number;
  itemCrossGap?: number;
  direction?: "horizontal" | "vertical";
  display?: {
    reverse?: boolean;
    align?: "start" | "end" | "center" | "stretch";
    crossAlign?:
      | "start"
      | "end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly";
    wrap?: "nowrap" | "wrap" | "wrap-reverse";
  };
}

export const FlatList = forwardRef<HTMLUListElement, Props>(
  (props, ref: ForwardedRef<HTMLUListElement>) => {
    const { data, renderItem, itemHorizontalCount, ...rest } = props;
    const { width = "100%", minWidth, maxWidth } = props.size ?? {};
    const { height = "100%", minHeight, maxHeight } = props.size ?? {};
    const { reverse, wrap = "wrap", align, crossAlign } = props.display ?? {};
    const {
      direction = "vertical",
      listScrollActive = false,
      listScrollbarView = false,
      padding = { all: 0 },
      margin,
    } = props;

    const viewT = { width, height, minWidth, maxWidth, minHeight, maxHeight };
    const spaceT = SpaceTheme({ padding, margin });

    //
    // direction_variants
    const FLEX_VARIANTS = {
      horizontal: {
        flexDirection: reverse ? ("row-reverse" as const) : ("row" as const),
        align: align ?? "stretch",
        rowGap: props.itemCrossGap ?? 10,
        columnGap: props.itemGap ?? 10,
      },
      vertical: {
        flexDirection: reverse
          ? ("column-reverse" as const)
          : ("column" as const),
        align: align ?? "flex-start",
        rowGap: props.itemGap ?? 10,
        columnGap: props.itemCrossGap ?? 10,
      },
    };

    //
    // displayTheme
    const displayThemes = {
      display: "flex",
      flexWrap:
        (reverse && "wrap-reverse") ||
        (direction === "horizontal" && "wrap") ||
        wrap,
      justifyContent: crossAlign,
      flexDirection: FLEX_VARIANTS[direction].flexDirection ?? "column",
      alignItems: FLEX_VARIANTS[direction].align ?? "start",
      rowGap: FLEX_VARIANTS[direction].rowGap ?? 0,
      columnGap: FLEX_VARIANTS[direction].columnGap ?? 0,
    };

    //
    // scrollTheme
    const scrollbarStyle = `
.flatList-items::-webkit-scrollbar {
  display: ${listScrollbarView ? "flex" : "none !important"};
  width: 5px;
  height: 5px;
}
.flatList-items::-webkit-scrollbar-track {
  background-color: transparent;
}
.flatList-items::-webkit-scrollbar-thumb {
  background-color: #cccccc;
  border-radius: 100px;
}
.flatList-items::-webkit-scrollbar-thumb:hover {
  background: #e2e2e2;
}
.flatList-items::-webkit-scrollbar-button:start:decrement,
.flatList-items::-webkit-scrollbar-button:end:increment {
  width: 0;
  height: 0;
  background-color: transparent;
}
`;

    //
    // item Count
    const listItemCountThemes = GetSceenItemCount({
      itemHorizontalCount,
      direction,
      itemGap: props.itemGap,
    });

    //
    // memoized Data
    const memoizedData = useMemo(() => {
      if (data && (props?.dataCount ?? data.length) > 0) {
        return data
          .map((item, index) => (
            <li
              className="flat-item"
              key={props.keyExtractor(item, index)}
              style={{
                ...listItemCountThemes,
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                padding: 0,
                margin: 0,
              }}
            >
              {renderItem(item, index)}
              {props.ItemSeparatorComponent}
            </li>
          ))
          .flat();
      } else {
        return <div style={{ width: "100%" }}>{props.ListEmptyComponent}</div>;
      }
    }, [
      data,
      props.keyExtractor,
      props.ItemSeparatorComponent,
      renderItem,
      listItemCountThemes,
      props.dataCount,
      props.ListEmptyComponent,
    ]);

    // remove error
    console.error = () => {};

    return (
      <>
        <style>{scrollbarStyle}</style>
        {props.ListHeaderComponent}
        {props.loading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {props.ListLoadingComponent}
          </div>
        ) : (
          <ul
            className="flatList-items"
            ref={ref}
            style={{
              ...viewT,
              ...spaceT,
              ...displayThemes,
              position: "relative",
              listStyle: "none",
              overflow: listScrollActive ? "auto" : "visible !important",
            }}
            {...rest}
          >
            {memoizedData}
          </ul>
        )}
        {props.ListFooterComponent}
      </>
    );
  }
);

//
// screen resize
const GetSceenItemCount = ({
  itemHorizontalCount,
  direction,
  itemGap = 10,
}: {
  itemHorizontalCount?: { desktop?: number; tablet?: number; mobile?: number };
  direction?: "horizontal" | "vertical";
  itemGap?: number;
}) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // This code runs after component mounts, ensuring window is available
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopCount = itemHorizontalCount?.desktop ?? 1;
  const tabletCount = itemHorizontalCount?.tablet ?? 1;
  const mobileCount = itemHorizontalCount?.mobile ?? 1;

  const calculateWidth = (count: number) => {
    if (count === 1) return "100%";
    return `calc(${100 / count}% - ${(itemGap * (count - 1)) / count}px)`;
  };

  const listItemStyle = (count: number) => ({
    width: calculateWidth(count),
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (direction === "horizontal") {
    if (screenWidth >= 1080) {
      return listItemStyle(desktopCount);
    } else if (screenWidth >= 600) {
      return listItemStyle(tabletCount);
    } else {
      return listItemStyle(mobileCount);
    }
  } else {
    return { width: "100%" };
  }
};
