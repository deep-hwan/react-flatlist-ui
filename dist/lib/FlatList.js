"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlatList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var space_1 = require("../themes/space");
exports.FlatList = (0, react_1.forwardRef)(function (props, ref) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var data = props.data, renderItem = props.renderItem, itemHorizontalCount = props.itemHorizontalCount, rest = __rest(props, ["data", "renderItem", "itemHorizontalCount"]);
    var _m = (_a = props.size) !== null && _a !== void 0 ? _a : {}, _o = _m.width, width = _o === void 0 ? "100%" : _o, minWidth = _m.minWidth, maxWidth = _m.maxWidth;
    var _p = (_b = props.size) !== null && _b !== void 0 ? _b : {}, _q = _p.height, height = _q === void 0 ? "100%" : _q, minHeight = _p.minHeight, maxHeight = _p.maxHeight;
    var _r = (_c = props.display) !== null && _c !== void 0 ? _c : {}, reverse = _r.reverse, _s = _r.wrap, wrap = _s === void 0 ? "wrap" : _s, align = _r.align, crossAlign = _r.crossAlign;
    var _t = props.direction, direction = _t === void 0 ? "vertical" : _t, _u = props.listScrollActive, listScrollActive = _u === void 0 ? false : _u, _v = props.listScrollbarView, listScrollbarView = _v === void 0 ? false : _v, _w = props.padding, padding = _w === void 0 ? { all: 0 } : _w, margin = props.margin;
    var viewT = { width: width, height: height, minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight };
    var spaceT = (0, space_1.SpaceTheme)({ padding: padding, margin: margin });
    //
    // direction_variants
    var FLEX_VARIANTS = {
        horizontal: {
            flexDirection: reverse ? "row-reverse" : "row",
            align: align !== null && align !== void 0 ? align : "stretch",
            rowGap: (_d = props.itemCrossGap) !== null && _d !== void 0 ? _d : 10,
            columnGap: (_e = props.itemGap) !== null && _e !== void 0 ? _e : 10,
        },
        vertical: {
            flexDirection: reverse
                ? "column-reverse"
                : "column",
            align: align !== null && align !== void 0 ? align : "flex-start",
            rowGap: (_f = props.itemGap) !== null && _f !== void 0 ? _f : 10,
            columnGap: (_g = props.itemCrossGap) !== null && _g !== void 0 ? _g : 10,
        },
    };
    //
    // displayTheme
    var displayThemes = {
        display: "flex",
        flexWrap: (reverse && "wrap-reverse") ||
            (direction === "horizontal" && "wrap") ||
            wrap,
        justifyContent: crossAlign,
        flexDirection: (_h = FLEX_VARIANTS[direction].flexDirection) !== null && _h !== void 0 ? _h : "column",
        alignItems: (_j = FLEX_VARIANTS[direction].align) !== null && _j !== void 0 ? _j : "start",
        rowGap: (_k = FLEX_VARIANTS[direction].rowGap) !== null && _k !== void 0 ? _k : 0,
        columnGap: (_l = FLEX_VARIANTS[direction].columnGap) !== null && _l !== void 0 ? _l : 0,
    };
    //
    // scrollTheme
    var scrollbarStyle = "\n.flatList-items::-webkit-scrollbar {\n  display: ".concat(listScrollbarView ? "flex" : "none !important", ";\n  width: 5px;\n  height: 5px;\n}\n.flatList-items::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.flatList-items::-webkit-scrollbar-thumb {\n  background-color: #cccccc;\n  border-radius: 100px;\n}\n.flatList-items::-webkit-scrollbar-thumb:hover {\n  background: #e2e2e2;\n}\n.flatList-items::-webkit-scrollbar-button:start:decrement,\n.flatList-items::-webkit-scrollbar-button:end:increment {\n  width: 0;\n  height: 0;\n  background-color: transparent;\n}\n");
    //
    // item Count
    var listItemCountThemes = GetSceenItemCount({
        itemHorizontalCount: itemHorizontalCount,
        direction: direction,
        itemGap: props.itemGap,
    });
    //
    // memoized Data
    var memoizedData = (0, react_1.useMemo)(function () {
        var _a;
        if (data && ((_a = props === null || props === void 0 ? void 0 : props.dataCount) !== null && _a !== void 0 ? _a : data.length) > 0) {
            return data
                .map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("li", __assign({ className: "flat-item", style: __assign(__assign({}, listItemCountThemes), { display: "flex", flexDirection: "column", alignItems: "start", padding: 0, margin: 0 }) }, { children: [renderItem(item, index), props.ItemSeparatorComponent] }), props.keyExtractor(item, index))); })
                .flat();
        }
        else {
            return (0, jsx_runtime_1.jsx)("div", __assign({ style: { width: "100%" } }, { children: props.ListEmptyComponent }));
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("style", { children: scrollbarStyle }), props.ListHeaderComponent, (0, jsx_runtime_1.jsx)("ul", __assign({ className: "flatList-items", ref: ref, style: __assign(__assign(__assign(__assign({}, viewT), spaceT), displayThemes), { position: "relative", listStyle: "none", overflow: listScrollActive ? "auto" : "visible !important" }) }, rest, { children: memoizedData })), props.ListFooterComponent] }));
});
//
// screen resize
var GetSceenItemCount = function (_a) {
    var _b, _c, _d;
    var itemHorizontalCount = _a.itemHorizontalCount, direction = _a.direction, _e = _a.itemGap, itemGap = _e === void 0 ? 10 : _e;
    var _f = (0, react_1.useState)(window.innerWidth), screenWidth = _f[0], setScreenWidth = _f[1];
    var desktopCount = (_b = itemHorizontalCount === null || itemHorizontalCount === void 0 ? void 0 : itemHorizontalCount.desktop) !== null && _b !== void 0 ? _b : 1;
    var tabletCount = (_c = itemHorizontalCount === null || itemHorizontalCount === void 0 ? void 0 : itemHorizontalCount.tablet) !== null && _c !== void 0 ? _c : 1;
    var mobileCount = (_d = itemHorizontalCount === null || itemHorizontalCount === void 0 ? void 0 : itemHorizontalCount.mobile) !== null && _d !== void 0 ? _d : 1;
    var calculateWidth = function (count) {
        if (count === 1)
            return "100%";
        return "calc(".concat(100 / count, "% - ").concat((itemGap * (count - 1)) / count, "px)");
    };
    var listItemStyle = function (count) { return ({
        width: calculateWidth(count),
    }); };
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    if (direction === "horizontal") {
        if (screenWidth >= 1080) {
            return listItemStyle(desktopCount);
        }
        else if (screenWidth >= 600) {
            return listItemStyle(tabletCount);
        }
        else {
            return listItemStyle(mobileCount);
        }
    }
    else {
        return { width: "100%" };
    }
};
