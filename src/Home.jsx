import React, { useState } from 'react';
import Header from './Header';
import { colors, spacing, borderRadius, shadows } from './styles/colors';

const Home = () => {
  const [usuario, setUsuario] = useState(localStorage.getItem('usuarioActual') || null);

  const handleLogin = (nombre) => {
    localStorage.setItem('usuarioActual', nombre);
    setUsuario(nombre);
  };

  const handleLogout = () => {
    setUsuario(null);
    localStorage.removeItem('usuarioActual');
  };

  const serviceCard = {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.base,
    border: `1px solid ${colors.borderColor}`,
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
            🚀 Bienvenido a MAERSK
          </h1>
          <p style={{ fontSize: '20px', marginBottom: spacing.xl, opacity: 0.95 }}>
            Líder en transporte marítimo global, gestión de contenedores y soluciones logísticas integradas.
          </p>
          <div style={{ display: 'flex', gap: spacing.md, justifyContent: 'center', flexWrap: 'wrap' }}>
            {!usuario ? (
              <>
                <button
                  onClick={() => handleLogin('Cliente')}
                  style={{
                    padding: `${spacing.md} ${spacing.xl}`,
                    backgroundColor: colors.accent,
                    color: colors.primary,
                    border: 'none',
                    borderRadius: borderRadius.lg,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: '250ms ease-in-out',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#ffb300'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.accent}
                >
                  👤 Iniciar Sesión
                </button>
                <a
                  href="/signup"
                  style={{
                    display: 'inline-block',
                    padding: `${spacing.md} ${spacing.xl}`,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: borderRadius.lg,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    border: `2px solid white`,
                    transition: '250ms ease-in-out',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                >
                  📝 Registrarse
                </a>
              </>
            ) : (
              <>
                <a
                  href="/dashboard"
                  style={{
                    display: 'inline-block',
                    padding: `${spacing.md} ${spacing.xl}`,
                    backgroundColor: colors.accent,
                    color: colors.primary,
                    textDecoration: 'none',
                    borderRadius: borderRadius.lg,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: '250ms ease-in-out',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#ffb300'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.accent}
                >
                  📊 Mi Dashboard
                </a>
                <a
                  href="/profile"
                  style={{
                    display: 'inline-block',
                    padding: `${spacing.md} ${spacing.xl}`,
                    backgroundColor: colors.info,
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: borderRadius.lg,
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: '250ms ease-in-out',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0a6b8a'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.info}
                >
                  👤 Mi Perfil
                </a>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: `${spacing.xl} ${spacing.lg}`, maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: spacing.xl }}>¿Qué ofrecemos?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: spacing.lg,
        }}>
          <div
            style={serviceCard}
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
            <h3 style={{ marginBottom: spacing.md }}>Flota de Contenedores</h3>
            <p style={{ color: colors.dark }}>
              Operamos una de las flotas de contenedores más grandes del mundo, conectando puertos globales con eficiencia y seguridad.
            </p>
          </div>

          <div
            style={serviceCard}
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
            <p style={{ color: colors.dark }}>
              Presencia en más de 130 países con una red marítima y logística confiable, siempre disponible para ti.
            </p>
          </div>

          <div
            style={serviceCard}
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
            <p style={{ color: colors.dark }}>
              Servicios de terminal y logística integrada en los principales puertos del mundo con tecnología de punta.
            </p>
          </div>

          <div
            style={serviceCard}
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
            <h3 style={{ marginBottom: spacing.md }}>Gestión Digital</h3>
            <p style={{ color: colors.dark }}>
              Herramientas digitales avanzadas para gestionar tus envíos en tiempo real y optimizar tu cadena de suministro.
            </p>
          </div>

          <div
            style={serviceCard}
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
            <h3 style={{ marginBottom: spacing.md }}>Editor de Código</h3>
            <p style={{ color: colors.dark }}>
              Acceso a un editor integrado profesional para personalizar y automatizar procesos según tus necesidades.
            </p>
          </div>

          <div
            style={serviceCard}
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
            <div style={{ fontSize: '48px', marginBottom: spacing.md }}>🔒</div>
            <h3 style={{ marginBottom: spacing.md }}>Seguridad</h3>
            <p style={{ color: colors.dark }}>
              Máxima seguridad en todas las transacciones con encriptación de última generación y cumplimiento normativo.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: colors.white,
        padding: `${spacing.xl} ${spacing.lg}`,
        borderTop: `1px solid ${colors.borderColor}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: spacing.lg }}>Comienza Hoy</h2>
          <p style={{ fontSize: '18px', marginBottom: spacing.xl, color: colors.dark }}>
            Únete a miles de empresas que confían en MAERSK para sus necesidades logísticas globales.
          </p>
          <div style={{ display: 'flex', gap: spacing.md, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/editor" style={{
              display: 'inline-block',
              padding: `${spacing.md} ${spacing.xl}`,
              backgroundColor: colors.secondary,
              color: 'white',
              textDecoration: 'none',
              borderRadius: borderRadius.lg,
              fontWeight: 'bold',
              transition: '250ms ease-in-out',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7e34'}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.secondary}
            >
              💻 Explorar Servicios
            </a>
            <a href="/landing" style={{
              display: 'inline-block',
              padding: `${spacing.md} ${spacing.xl}`,
              backgroundColor: colors.light,
              border: `2px solid ${colors.primary}`,
              color: colors.primary,
              textDecoration: 'none',
              borderRadius: borderRadius.lg,
              fontWeight: 'bold',
              transition: '250ms ease-in-out',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f4ff'}
            onMouseLeave={(e) => e.target.style.backgroundColor = colors.light}
            >
              📖 Conocer Más
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
