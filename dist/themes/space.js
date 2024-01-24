"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceTheme = void 0;
var SpaceTheme = function (_a) {
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
        paddingTop: (p_all && p_all) || (p_V && p_V) || (p_T && p_T),
        paddingBottom: (p_all && p_all) || (p_V && p_V) || (p_B && p_B),
        paddingLeft: (p_all && p_all) || (p_H && p_H) || (p_L && p_L),
        paddingRight: (p_all && p_all) || (p_H && p_H) || (p_R && p_R),
        marginTop: (m_all && m_all) || (m_V && m_V) || (m_T && m_T),
        marginBottom: (m_all && m_all) || (m_V && m_V) || (m_B && m_B),
        marginLeft: (m_all && m_all) || (m_H && m_H) || (m_L && m_L),
        marginRight: (m_all && m_all) || (m_H && m_H) || (m_R && m_R),
    };
};
exports.SpaceTheme = SpaceTheme;
