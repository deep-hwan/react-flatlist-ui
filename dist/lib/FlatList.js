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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var data = props.data, renderItem = props.renderItem, itemHorizontalCount = props.itemHorizontalCount, rest = __rest(props, ["data", "renderItem", "itemHorizontalCount"]);
    var _p = (_a = props.size) !== null && _a !== void 0 ? _a : {}, _q = _p.width, width = _q === void 0 ? "100%" : _q, minWidth = _p.minWidth, maxWidth = _p.maxWidth;
    var _r = (_b = props.size) !== null && _b !== void 0 ? _b : {}, _s = _r.height, height = _s === void 0 ? "100%" : _s, minHeight = _r.minHeight, maxHeight = _r.maxHeight;
    var _t = (_c = props.display) !== null && _c !== void 0 ? _c : {}, reverse = _t.reverse, _u = _t.wrap, wrap = _u === void 0 ? "wrap" : _u, crossAlign = _t.crossAlign;
    var _v = props.direction, direction = _v === void 0 ? "vertical" : _v, listScrollbarView = props.listScrollbarView, _w = props.padding, padding = _w === void 0 ? { all: 0 } : _w, _x = props.margin, margin = _x === void 0 ? { all: 0 } : _x;
    var viewT = { width: width, height: height, minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight };
    var spaceT = (0, space_1.SpaceTheme)({ padding: padding, margin: margin });
    var FLEX_VARIANTS = {
        horizontal: {
            flexDirection: reverse ? "row-reverse" : "row",
            align: (_d = (props.display && props.display.align)) !== null && _d !== void 0 ? _d : "stretch",
            rowGap: (_e = props.itemCrossGap) !== null && _e !== void 0 ? _e : 10,
            columnGap: (_f = props.itemGap) !== null && _f !== void 0 ? _f : 10,
        },
        vertical: {
            flexDirection: reverse
                ? "column-reverse"
                : "column",
            align: (_g = (props.display && props.display.align)) !== null && _g !== void 0 ? _g : "flex-start",
            rowGap: (_h = props.itemGap) !== null && _h !== void 0 ? _h : 10,
            columnGap: (_j = props.itemCrossGap) !== null && _j !== void 0 ? _j : 10,
        },
    };
    // displayTheme
    var displayThemes = {
        display: "flex",
        flexWrap: wrap === "wrap" && reverse ? "wrap-reverse" : wrap,
        justifyContent: crossAlign,
        flexDirection: (_k = FLEX_VARIANTS[direction].flexDirection) !== null && _k !== void 0 ? _k : "column",
        alignItems: (_l = FLEX_VARIANTS[direction].align) !== null && _l !== void 0 ? _l : "start",
        rowGap: (_m = FLEX_VARIANTS[direction].rowGap) !== null && _m !== void 0 ? _m : 0,
        columnGap: (_o = FLEX_VARIANTS[direction].columnGap) !== null && _o !== void 0 ? _o : 0,
    };
    // scrollTheme
    var scrollbarStyle = "\n.customScrollbar::-webkit-scrollbar {\n  display: ".concat(listScrollbarView ? "flex" : "none", ";\n  width: 5px;\n  height: 5px;\n}\n.customScrollbar::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.customScrollbar::-webkit-scrollbar-thumb {\n  background-color: #cccccc;\n  border-radius: 100px;\n}\n.customScrollbar::-webkit-scrollbar-thumb:hover {\n  background: #e2e2e2;\n}\n.customScrollbar::-webkit-scrollbar-button:start:decrement,\n.customScrollbar::-webkit-scrollbar-button:end:increment {\n  width: 0;\n  height: 0;\n  background-color: transparent;\n}\n");
    // item Count
    var listItemCountThemes = GetSceenItemCount({
        itemHorizontalCount: itemHorizontalCount,
        direction: direction,
        itemGap: props.itemGap,
    });
    // memo Data
    var memoizedData = (0, react_1.useMemo)(function () {
        var _a;
        if (data && ((_a = props === null || props === void 0 ? void 0 : props.dataCount) !== null && _a !== void 0 ? _a : data.length) > 0) {
            return data
                .map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("li", __assign({ style: __assign(__assign({ display: "flex", flexDirection: "column", alignItems: "start" }, listItemCountThemes), { transition: "0.3s ease-in-out", padding: 0, margin: 0 }) }, { children: [renderItem(item, index), props.ItemSeparatorComponent] }), props.keyExtractor(item, index))); })
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("style", { children: scrollbarStyle }), (0, jsx_runtime_1.jsx)("ul", __assign({ className: "customScrollbar", ref: ref, style: __assign(__assign(__assign(__assign({}, viewT), spaceT), displayThemes), { position: "relative", listStyle: "none", padding: 0, margin: 0, overflow: "auto" }) }, rest, { children: memoizedData }))] }));
});
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
