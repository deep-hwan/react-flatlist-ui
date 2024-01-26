"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceTheme = void 0;
var SpaceTheme = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var padding = _a.padding, margin = _a.margin;
    var p_all = padding === null || padding === void 0 ? void 0 : padding.all;
    var p_V = padding === null || padding === void 0 ? void 0 : padding.vertical;
    var p_H = padding === null || padding === void 0 ? void 0 : padding.horizontal;
    var p_T = padding === null || padding === void 0 ? void 0 : padding.top;
    var p_B = padding === null || padding === void 0 ? void 0 : padding.bottom;
    var p_L = padding === null || padding === void 0 ? void 0 : padding.left;
    var p_R = padding === null || padding === void 0 ? void 0 : padding.right;
    var m_all = margin === null || margin === void 0 ? void 0 : margin.all;
    var m_V = margin === null || margin === void 0 ? void 0 : margin.vertical;
    var m_H = margin === null || margin === void 0 ? void 0 : margin.horizontal;
    var m_T = margin === null || margin === void 0 ? void 0 : margin.top;
    var m_B = margin === null || margin === void 0 ? void 0 : margin.bottom;
    var m_L = margin === null || margin === void 0 ? void 0 : margin.left;
    var m_R = margin === null || margin === void 0 ? void 0 : margin.right;
    return {
        paddingTop: (_b = ((p_all && p_all) || (p_V && p_V) || (p_T && p_T))) !== null && _b !== void 0 ? _b : 0,
        paddingBottom: (_c = ((p_all && p_all) || (p_V && p_V) || (p_B && p_B))) !== null && _c !== void 0 ? _c : 0,
        paddingLeft: (_d = ((p_all && p_all) || (p_H && p_H) || (p_L && p_L))) !== null && _d !== void 0 ? _d : 0,
        paddingRight: (_e = ((p_all && p_all) || (p_H && p_H) || (p_R && p_R))) !== null && _e !== void 0 ? _e : 0,
        marginTop: (_f = ((m_all && m_all) || (m_V && m_V) || (m_T && m_T))) !== null && _f !== void 0 ? _f : 0,
        marginBottom: (_g = ((m_all && m_all) || (m_V && m_V) || (m_B && m_B))) !== null && _g !== void 0 ? _g : 0,
        marginLeft: (_h = ((m_all && m_all) || (m_H && m_H) || (m_L && m_L))) !== null && _h !== void 0 ? _h : 0,
        marginRight: (_j = ((m_all && m_all) || (m_H && m_H) || (m_R && m_R))) !== null && _j !== void 0 ? _j : 0,
    };
};
exports.SpaceTheme = SpaceTheme;
