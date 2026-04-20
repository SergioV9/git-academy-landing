import React, { useState } from 'react';
import Header from './Header';
import { colors, spacing, borderRadius, shadows } from './styles/colors';

const Dashboard = () => {
  const [usuario, setUsuario] = useState(localStorage.getItem('usuarioActual') || null);

  const handleLogout = () => {
    setUsuario(null);
    localStorage.removeItem('usuarioActual');
    window.location.href = '/home';
  };

  const serviceCard = {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    boxShadow: shadows.base,
    cursor: 'pointer',
    transition: 'all 250ms ease-in-out',
    border: `1px solid ${colors.borderColor}`,
  };

  const serviceCardHover = {
    ...serviceCard,
    transform: 'translateY(-5px)',
    boxShadow: shadows.lg,
    borderColor: colors.primary,
  };

  return (
    <div style={{ backgroundColor: colors.light, minHeight: '100vh' }}>
      <Header usuario={usuario} onLogout={handleLogout} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: spacing.xl }}>
        {/* Welcome Section */}
        <section style={{
          background: colors.gradient.primary,
          color: 'white',
          borderRadius: borderRadius.lg,
          padding: spacing.xl,
          marginBottom: spacing.xl,
          boxShadow: shadows.lg,
        }}>
          <h1 style={{ color: 'white', marginBottom: spacing.md }}>
            ¡Bienvenido, {usuario}! 👋
          </h1>
          <p style={{ fontSize: '18px', marginBottom: 0 }}>
            Gestiona tu cuenta, accede a nuestros servicios y monitorea tus envíos.
          </p>
        </section>

        {/* Stats Section */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: spacing.lg,
          marginBottom: spacing.xl,
        }}>
          <div style={{
            ...serviceCard,
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
            color: 'white',
            padding: spacing.lg,
          }}>
            <div style={{ fontSize: '36px', marginBottom: spacing.md }}>📦</div>
            <h3 style={{ color: 'white', marginBottom: spacing.sm }}>Mis Envíos</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>5 envíos activos</p>
          </div>

          <div style={{
            ...serviceCard,
            background: `linear-gradient(135deg, ${colors.info} 0%, #0a6b8a 100%)`,
            color: 'white',
            padding: spacing.lg,
          }}>
            <div style={{ fontSize: '36px', marginBottom: spacing.md }}>🌍</div>
            <h3 style={{ color: 'white', marginBottom: spacing.sm }}>Destinos</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>15 rutas disponibles</p>
          </div>

          <div style={{
            ...serviceCard,
            background: `linear-gradient(135deg, ${colors.secondary} 0%, #1e7e34 100%)`,
            color: 'white',
            padding: spacing.lg,
          }}>
            <div style={{ fontSize: '36px', marginBottom: spacing.md }}>⚓</div>
            <h3 style={{ color: 'white', marginBottom: spacing.sm }}>Puertos</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>130+ puertos</p>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ marginBottom: spacing.xl }}>
          <h2 style={{ marginBottom: spacing.lg }}>Servicios Disponibles</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing.lg,
          }}>
            {/* Editor Service */}
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
              <p style={{ marginBottom: spacing.lg, color: colors.dark }}>
                Accede a nuestro editor integrado para gestionar configuraciones y códigos personalizados.
              </p>
              <a href="/editor" style={{
                display: 'inline-block',
                padding: `${spacing.sm} ${spacing.md}`,
                backgroundColor: colors.primary,
                color: 'white',
                borderRadius: borderRadius.base,
                fontWeight: 'bold',
              }}>
                Ir al Editor →
              </a>
            </div>

            {/* TEU Counter */}
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
              <h3 style={{ marginBottom: spacing.md }}>Contador de TEUs</h3>
              <p style={{ marginBottom: spacing.lg, color: colors.dark }}>
                Monitorea la cantidad de unidades equivalentes de contenedores en tiempo real.
              </p>
              <a href="/simple" style={{
                display: 'inline-block',
                padding: `${spacing.sm} ${spacing.md}`,
                backgroundColor: colors.secondary,
                color: 'white',
                borderRadius: borderRadius.base,
                fontWeight: 'bold',
              }}>
                Ver Contador →
              </a>
            </div>

            {/* Perfil */}
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
              <div style={{ fontSize: '48px', marginBottom: spacing.md }}>👤</div>
              <h3 style={{ marginBottom: spacing.md }}>Mi Perfil</h3>
              <p style={{ marginBottom: spacing.lg, color: colors.dark }}>
                Gestiona tu información personal, contraseña y preferencias de cuenta.
              </p>
              <a href="/profile" style={{
                display: 'inline-block',
                padding: `${spacing.sm} ${spacing.md}`,
                backgroundColor: colors.info,
                color: 'white',
                borderRadius: borderRadius.base,
                fontWeight: 'bold',
              }}>
                Ir a Perfil →
              </a>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section style={{
          backgroundColor: colors.white,
          borderRadius: borderRadius.lg,
          padding: spacing.lg,
          boxShadow: shadows.base,
        }}>
          <h2 style={{ marginBottom: spacing.lg }}>Acciones Rápidas</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: spacing.md,
          }}>
            <button style={{
              padding: `${spacing.md} ${spacing.lg}`,
              backgroundColor: colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: borderRadius.base,
              fontWeight: 'bold',
              cursor: 'pointer',
            }}>
              + Nuevo Envío
            </button>
            <button style={{
              padding: `${spacing.md} ${spacing.lg}`,
              backgroundColor: colors.secondary,
              color: 'white',
              border: 'none',
              borderRadius: borderRadius.base,
              fontWeight: 'bold',
              cursor: 'pointer',
            }}>
              📱 Descargar App
            </button>
            <button style={{
              padding: `${spacing.md} ${spacing.lg}`,
              backgroundColor: colors.info,
              color: 'white',
              border: 'none',
              borderRadius: borderRadius.base,
              fontWeight: 'bold',
              cursor: 'pointer',
            }}>
              💬 Contactar Soporte
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
