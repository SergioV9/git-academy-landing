import React, { useState } from 'react';
import Header from './Header';
import { colors, spacing, borderRadius, shadows } from './styles/colors';

const Landing = () => {
  const [usuario, setUsuario] = useState(localStorage.getItem('usuarioActual') || null);

  const handleLogout = () => {
    setUsuario(null);
    localStorage.removeItem('usuarioActual');
  };

  const featureCard = {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.base,
    border: `1px solid ${colors.borderColor}`,
    textAlign: 'center',
  };

  return (
    <div style={{ backgroundColor: colors.light, minHeight: '100vh' }}>
      <Header usuario={usuario} onLogout={handleLogout} />

      {/* Hero Section */}
      <section style={{
        background: colors.gradient.primary,
        color: 'white',
        padding: `${spacing.xl} ${spacing.lg}`,
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ color: 'white', fontSize: '48px', marginBottom: spacing.lg }}>
            Bienvenido a MAERSK
          </h1>
          <p style={{ fontSize: '20px', marginBottom: spacing.xl, opacity: 0.95 }}>
            Líder mundial en transporte marítimo y soluciones logísticas. Conectamos negocios
            a través de una red global de más de 130 países.
          </p>
          {usuario ? (
            <a href="/home" style={{
              display: 'inline-block',
              padding: `${spacing.md} ${spacing.xl}`,
              backgroundColor: colors.accent,
              color: colors.primary,
              textDecoration: 'none',
              borderRadius: borderRadius.lg,
              fontWeight: 'bold',
              fontSize: '18px',
              marginRight: spacing.md,
            }}>
              📊 Ir a Mi Dashboard
            </a>
          ) : (
            <>
              <a href="/signup" style={{
                display: 'inline-block',
                padding: `${spacing.md} ${spacing.xl}`,
                backgroundColor: colors.accent,
                color: colors.primary,
                textDecoration: 'none',
                borderRadius: borderRadius.lg,
                fontWeight: 'bold',
                fontSize: '18px',
                marginRight: spacing.md,
              }}>
                🚀 Comenzar Ahora
              </a>
              <a href="/home" style={{
                display: 'inline-block',
                padding: `${spacing.md} ${spacing.xl}`,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: borderRadius.lg,
                fontWeight: 'bold',
                fontSize: '18px',
                border: `2px solid white`,
              }}>
                Conocer Más
              </a>
            </>
          )}
        </div>
      </section>

      {/* What You Can Do Section */}
      <section style={{
        padding: `${spacing.xl} ${spacing.lg}`,
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: spacing.xl }}>¿Qué puedes hacer?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: spacing.lg,
        }}>
          <div
            style={featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = shadows.lg;
              e.currentTarget.style.borderColor = colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = shadows.base;
              e.currentTarget.style.borderColor = colors.borderColor;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: spacing.md }}>📦</div>
            <h3 style={{ marginBottom: spacing.md }}>Transporte Global</h3>
            <p style={{ marginBottom: 0, color: colors.dark }}>
              Transporte de mercancías a nivel mundial con los mejores estándares de seguridad.
            </p>
          </div>

          <div
            style={featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = shadows.lg;
              e.currentTarget.style.borderColor = colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = shadows.base;
              e.currentTarget.style.borderColor = colors.borderColor;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: spacing.md }}>⚓</div>
            <h3 style={{ marginBottom: spacing.md }}>Servicios Portuarios</h3>
            <p style={{ marginBottom: 0, color: colors.dark }}>
              Servicios portuarios y logística integrada en los principales puertos del mundo.
            </p>
          </div>

          <div
            style={featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = shadows.lg;
              e.currentTarget.style.borderColor = colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = shadows.base;
              e.currentTarget.style.borderColor = colors.borderColor;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: spacing.md }}>🌍</div>
            <h3 style={{ marginBottom: spacing.md }}>Cobertura Global</h3>
            <p style={{ marginBottom: 0, color: colors.dark }}>
              Presencia en más de 130 países con red marítima y logística confiable.
            </p>
          </div>

          <div
            style={featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = shadows.lg;
              e.currentTarget.style.borderColor = colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = shadows.base;
              e.currentTarget.style.borderColor = colors.borderColor;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: spacing.md }}>📊</div>
            <h3 style={{ marginBottom: spacing.md }}>Gestión de Cadena</h3>
            <p style={{ marginBottom: 0, color: colors.dark }}>
              Gestión de cadena de suministro eficiente y transparente en tiempo real.
            </p>
          </div>

          <div
            style={featureCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = shadows.lg;
              e.currentTarget.style.borderColor = colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = shadows.base;
              e.currentTarget.style.borderColor = colors.borderColor;
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: spacing.md }}>💻</div>
            <h3 style={{ marginBottom: spacing.md }}>Herramientas Digitales</h3>
            <p style={{ marginBottom: 0, color: colors.dark }}>
              Acceso a nuestro editor integrado y herramientas de análisis avanzado.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section style={{
        backgroundColor: colors.white,
        padding: `${spacing.xl} ${spacing.lg}`,
        borderTop: `1px solid ${colors.borderColor}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: spacing.xl }}>Explorar</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: spacing.md,
          }}>
            <a href="/home" style={{
              display: 'block',
              padding: spacing.lg,
              backgroundColor: colors.primary,
              color: 'white',
              textDecoration: 'none',
              borderRadius: borderRadius.lg,
              textAlign: 'center',
              fontWeight: 'bold',
              transition: '250ms ease-in-out',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = colors.primaryDark}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary}
            >
              🏠 Inicio
            </a>
            <a href="/editor" style={{
              display: 'block',
              padding: spacing.lg,
              backgroundColor: colors.secondary,
              color: 'white',
              textDecoration: 'none',
              borderRadius: borderRadius.lg,
              textAlign: 'center',
              fontWeight: 'bold',
              transition: '250ms ease-in-out',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7e34'}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.secondary}
            >
              💻 Servicios
            </a>
            <a href="/simple" style={{
              display: 'block',
              padding: spacing.lg,
              backgroundColor: colors.info,
              color: 'white',
              textDecoration: 'none',
              borderRadius: borderRadius.lg,
              textAlign: 'center',
              fontWeight: 'bold',
              transition: '250ms ease-in-out',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#0a6b8a'}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.info}
            >
              📊 Contador TEUs
            </a>
            <a href="/signup" style={{
              display: 'block',
              padding: spacing.lg,
              backgroundColor: colors.danger,
              color: 'white',
              textDecoration: 'none',
              borderRadius: borderRadius.lg,
              textAlign: 'center',
              fontWeight: 'bold',
              transition: '250ms ease-in-out',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.danger}
            >
              📝 Registrarse
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;