import React, { useState } from 'react';
import { colors, spacing, borderRadius, shadows, transitions } from './styles/colors';

const Header = ({ usuario, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: `${spacing.sm} ${spacing.md}`,
    display: 'block',
    transition: transitions.base,
    borderRadius: borderRadius.sm,
  };

  const navLinkHoverStyle = {
    ...navLinkStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  };

  const navigationItems = [
    { label: 'Inicio', href: '/home' },
    { label: 'Servicios', href: '/editor' },
    { label: 'Contador TEUs', href: '/simple' },
    { label: 'Sobre Nosotros', href: '/landing' },
  ];

  return (
    <header style={{
      background: colors.gradient.primary,
      color: 'white',
      padding: `${spacing.md} ${spacing.lg}`,
      boxShadow: shadows.lg,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none', cursor: 'pointer' }}>
          <div style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: spacing.md,
          }}>
            <span style={{
              width: '40px',
              height: '40px',
              backgroundColor: colors.accent,
              borderRadius: borderRadius.base,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.primary,
              fontWeight: 'bold',
            }}>
              ⚓
            </span>
            MAERSK
          </div>
        </a>

        {/* Navigation - Desktop */}
        <nav style={{
          display: 'flex',
          gap: spacing.md,
          alignItems: 'center',
          '@media (max-width: 768px)': {
            display: 'none',
          }
        }}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={navLinkStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* User Section */}
        <div style={{
          display: 'flex',
          gap: spacing.md,
          alignItems: 'center',
        }}>
          {usuario ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing.md,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: `${spacing.sm} ${spacing.md}`,
              borderRadius: borderRadius.base,
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                backgroundColor: colors.accent,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.primary,
                fontWeight: 'bold',
              }}>
                {usuario.charAt(0).toUpperCase()}
              </div>
              <span style={{ display: 'none', '@media (max-width: 768px)': { display: 'inline' } }}>
                {usuario}
              </span>
              <button
                onClick={onLogout}
                style={{
                  padding: `${spacing.sm} ${spacing.md}`,
                  backgroundColor: colors.danger,
                  color: 'white',
                  border: 'none',
                  borderRadius: borderRadius.sm,
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: transitions.base,
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.danger}
              >
                Cerrar
              </button>
            </div>
          ) : (
            <>
              <a
                href="/home"
                style={{
                  ...navLinkStyle,
                  display: 'none',
                  '@media (max-width: 768px)': { display: 'block' }
                }}
              >
                Inicio
              </a>
              <a
                href="/signup"
                style={{
                  padding: `${spacing.sm} ${spacing.lg}`,
                  backgroundColor: colors.accent,
                  color: colors.primary,
                  borderRadius: borderRadius.base,
                  fontWeight: 'bold',
                  transition: transitions.base,
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ffb300'}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.accent}
              >
                Registrarse
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
