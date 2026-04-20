import React, { useState } from 'react';
import Header from './Header';
import { colors, spacing, borderRadius, shadows } from './styles/colors';

const SimplePage = () => {
  const [count, setCount] = useState(0);
  const [usuario, setUsuario] = useState(localStorage.getItem('usuarioActual') || null);

  const handleLogout = () => {
    setUsuario(null);
    localStorage.removeItem('usuarioActual');
  };

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleSubtract = () => {
    if (count > 0) setCount(count - 1);
  };

  const getTEULevel = () => {
    if (count < 100) return { level: 'Bajo', color: colors.info, percentage: (count / 100) * 100 };
    if (count < 500) return { level: 'Medio', color: colors.warning, percentage: Math.min(((count - 100) / 400) * 100, 100) };
    return { level: 'Alto', color: colors.danger, percentage: 100 };
  };

  const teuLevel = getTEULevel();

  return (
    <div style={{ backgroundColor: colors.light, minHeight: '100vh' }}>
      <Header usuario={usuario} onLogout={handleLogout} />

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: spacing.xl,
      }}>
        {/* Header */}
        <div style={{
          background: colors.gradient.primary,
          color: 'white',
          borderRadius: borderRadius.lg,
          padding: spacing.xl,
          marginBottom: spacing.xl,
          textAlign: 'center',
          boxShadow: shadows.lg,
        }}>
          <h1 style={{ color: 'white', marginBottom: spacing.md }}>📊 Contador de TEUs</h1>
          <p style={{ marginBottom: 0, opacity: 0.9 }}>
            Monitorea las Unidades Equivalentes de Contenedores (TEU) en tiempo real
          </p>
        </div>

        {/* Main Counter Card */}
        <div style={{
          backgroundColor: colors.white,
          borderRadius: borderRadius.lg,
          padding: spacing.xl,
          boxShadow: shadows.lg,
          marginBottom: spacing.xl,
          textAlign: 'center',
        }}>
          {/* Counter Display */}
          <div style={{
            fontSize: '96px',
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: spacing.lg,
            fontFamily: 'monospace',
          }}>
            {count.toLocaleString()}
          </div>

          <p style={{ color: colors.dark, marginBottom: spacing.xl, fontSize: '18px' }}>
            TEUs Registrados
          </p>

          {/* Progress Bar */}
          <div style={{
            marginBottom: spacing.xl,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: spacing.sm,
              fontSize: '14px',
              color: colors.dark,
            }}>
              <span>Progreso</span>
              <span style={{ fontWeight: 'bold', color: teuLevel.color }}>
                {teuLevel.level}
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '20px',
              backgroundColor: colors.borderColor,
              borderRadius: borderRadius.lg,
              overflow: 'hidden',
            }}>
              <div style={{
                width: `${teuLevel.percentage}%`,
                height: '100%',
                backgroundColor: teuLevel.color,
                transition: 'width 300ms ease-in-out',
              }} />
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: spacing.md,
            marginBottom: spacing.xl,
            padding: spacing.lg,
            backgroundColor: colors.light,
            borderRadius: borderRadius.base,
          }}>
            <div>
              <p style={{ color: colors.dark, marginBottom: spacing.sm, fontSize: '14px' }}>Mínimo</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: colors.primary, margin: 0 }}>0</p>
            </div>
            <div>
              <p style={{ color: colors.dark, marginBottom: spacing.sm, fontSize: '14px' }}>Actual</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: teuLevel.color, margin: 0 }}>
                {count}
              </p>
            </div>
            <div>
              <p style={{ color: colors.dark, marginBottom: spacing.sm, fontSize: '14px' }}>Máximo</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: colors.secondary, margin: 0 }}>
                ∞
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: spacing.md,
          }}>
            <button
              onClick={handleSubtract}
              style={{
                padding: spacing.lg,
                fontSize: '16px',
                backgroundColor: colors.danger,
                color: 'white',
                border: 'none',
                borderRadius: borderRadius.base,
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: '250ms ease-in-out',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.danger}
            >
              ➖ Restar
            </button>

            <button
              onClick={handleClick}
              style={{
                padding: spacing.lg,
                fontSize: '18px',
                backgroundColor: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: borderRadius.base,
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: '250ms ease-in-out',
                transform: 'scale(1)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.primaryDark;
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.primary;
                e.target.style.transform = 'scale(1)';
              }}
            >
              ➕ Agregar
            </button>

            <button
              onClick={handleReset}
              style={{
                padding: spacing.lg,
                fontSize: '16px',
                backgroundColor: colors.warning,
                color: 'white',
                border: 'none',
                borderRadius: borderRadius.base,
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: '250ms ease-in-out',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e56a37'}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.warning}
            >
              🔄 Reiniciar
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div style={{
          backgroundColor: colors.white,
          borderRadius: borderRadius.lg,
          padding: spacing.lg,
          boxShadow: shadows.base,
          marginBottom: spacing.xl,
        }}>
          <h3 style={{ marginBottom: spacing.md }}>ℹ️ Información sobre TEUs</h3>
          <p style={{ color: colors.dark, marginBottom: spacing.md }}>
            <strong>TEU (Twenty-foot Equivalent Unit):</strong> Es la unidad de medida estándar para contenedores de transporte. 
            Equivale a un contenedor de 20 pies de largo.
          </p>
          <p style={{ color: colors.dark, marginBottom: 0 }}>
            Este contador te permite registrar y monitorear la cantidad de TEUs en tu flota en tiempo real, 
            facilitando la gestión de tu inventario logístico.
          </p>
        </div>

        {/* Navigation */}
        <div style={{
          display: 'flex',
          gap: spacing.md,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="/home" style={{
            display: 'inline-block',
            padding: `${spacing.md} ${spacing.lg}`,
            backgroundColor: colors.light,
            border: `2px solid ${colors.primary}`,
            color: colors.primary,
            textDecoration: 'none',
            borderRadius: borderRadius.base,
            fontWeight: 'bold',
            transition: '250ms ease-in-out',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f4ff'}
          onMouseLeave={(e) => e.target.style.backgroundColor = colors.light}
          >
            ← Volver al Inicio
          </a>
          <a href="/editor" style={{
            display: 'inline-block',
            padding: `${spacing.md} ${spacing.lg}`,
            backgroundColor: colors.secondary,
            color: 'white',
            textDecoration: 'none',
            borderRadius: borderRadius.base,
            fontWeight: 'bold',
            transition: '250ms ease-in-out',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7e34'}
          onMouseLeave={(e) => e.target.style.backgroundColor = colors.secondary}
          >
            Ir a Servicios →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
