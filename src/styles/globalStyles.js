import { colors, typography, spacing } from './colors';

export const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${typography.fontFamily};
    background-color: ${colors.light};
    color: ${colors.dark};
    line-height: 1.6;
  }

  html, body, #app {
    height: 100%;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.dark};
    line-height: 1.2;
    margin-bottom: ${spacing.md};
  }

  h1 { font-size: ${typography.fontSize['4xl']}; }
  h2 { font-size: ${typography.fontSize['3xl']}; }
  h3 { font-size: ${typography.fontSize['2xl']}; }
  h4 { font-size: ${typography.fontSize.xl}; }
  h5 { font-size: ${typography.fontSize.lg}; }
  h6 { font-size: ${typography.fontSize.base}; }

  p {
    margin-bottom: ${spacing.md};
    color: ${colors.dark};
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
    transition: color 250ms ease-in-out;
  }

  a:hover {
    color: ${colors.primaryDark};
  }

  button {
    font-family: ${typography.fontFamily};
    cursor: pointer;
    transition: all 250ms ease-in-out;
  }

  button:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  input, textarea, select {
    font-family: ${typography.fontFamily};
  }
`;
