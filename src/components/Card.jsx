import React from 'react';
import { colors, borderRadius, shadows, spacing } from '../styles/colors';

const Card = ({
  children,
  onClick,
  hoverable = true,
  shadow = 'base',
  style = {},
  className = '',
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const cardStyle = {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows[shadow],
    border: `1px solid ${colors.borderColor}`,
    cursor: hoverable ? 'pointer' : 'default',
    transition: 'all 250ms ease-in-out',
    transform: isHovered && hoverable ? 'translateY(-5px)' : 'translateY(0)',
    borderColor: isHovered && hoverable ? colors.primary : colors.borderColor,
    boxShadow: isHovered && hoverable ? shadows.lg : shadows[shadow],
    ...style,
  };

  return (
    <div
      className={className}
      style={cardStyle}
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
