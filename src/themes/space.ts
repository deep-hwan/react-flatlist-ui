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

export const SpaceTheme = ({ padding, margin }: SpaceType) => {
  const p_all = padding?.all;
  const p_V = padding?.vertical;
  const p_H = padding?.horizontal;
  const p_T = padding?.top;
  const p_B = padding?.bottom;
  const p_L = padding?.left;
  const p_R = padding?.right;

  const m_all = margin?.all;
  const m_V = margin?.vertical;
  const m_H = margin?.horizontal;
  const m_T = margin?.top;
  const m_B = margin?.bottom;
  const m_L = margin?.left;
  const m_R = margin?.right;

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
