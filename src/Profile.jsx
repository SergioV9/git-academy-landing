import React, { useState } from 'react';
import Header from './Header';
import { colors, spacing, borderRadius, shadows } from './styles/colors';

const Profile = () => {
  const [usuario, setUsuario] = useState(localStorage.getItem('usuarioActual') || 'Usuario');
  const [formData, setFormData] = useState({
    nombre: usuario,
    email: 'usuario@maersk.com',
    telefono: '+34 912 34 56 78',
    empresa: 'Mi Empresa',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const handleLogout = () => {
    setUsuario(null);
    localStorage.removeItem('usuarioActual');
    window.location.href = '/home';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    localStorage.setItem('usuarioActual', formData.nombre);
    setMensaje('✓ Perfil actualizado correctamente');
    setIsEditing(false);
    setTimeout(() => setMensaje(''), 3000);
  };

  const inputStyle = {
    width: '100%',
    padding: spacing.md,
    marginBottom: spacing.md,
    border: `1px solid ${colors.borderColor}`,
    borderRadius: borderRadius.base,
    fontSize: '14px',
    fontFamily: 'inherit',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: spacing.sm,
    fontWeight: 'bold',
    color: colors.dark,
  };

  return (
    <div style={{ backgroundColor: colors.light, minHeight: '100vh' }}>
      <Header usuario={usuario} onLogout={handleLogout} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: spacing.xl }}>
        {/* Profile Header */}
        <div style={{
          background: colors.gradient.primary,
          color: 'white',
          borderRadius: borderRadius.lg,
          padding: spacing.xl,
          marginBottom: spacing.xl,
          display: 'flex',
          alignItems: 'center',
          gap: spacing.lg,
          boxShadow: shadows.lg,
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: colors.accent,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '56px',
            color: colors.primary,
          }}>
            {usuario.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 style={{ color: 'white', marginBottom: spacing.sm }}>
              {usuario}
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: 0 }}>
              Miembro desde 2024
            </p>
          </div>
        </div>

        {/* Message */}
        {mensaje && (
          <div style={{
            backgroundColor: colors.secondary,
            color: 'white',
            padding: spacing.md,
            borderRadius: borderRadius.base,
            marginBottom: spacing.lg,
            textAlign: 'center',
          }}>
            {mensaje}
          </div>
        )}

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: spacing.lg,
          marginBottom: spacing.xl,
        }}>
          {/* Profile Info Card */}
          <div style={{
            backgroundColor: colors.white,
            borderRadius: borderRadius.lg,
            padding: spacing.lg,
            boxShadow: shadows.base,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: spacing.lg,
            }}>
              <h2 style={{ marginBottom: 0 }}>Información Personal</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                style={{
                  padding: `${spacing.sm} ${spacing.md}`,
                  backgroundColor: isEditing ? colors.danger : colors.primary,
                  color: 'white',
                  border: 'none',
                  borderRadius: borderRadius.base,
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                {isEditing ? 'Cancelar' : '✏️ Editar'}
              </button>
            </div>

            {isEditing ? (
              <>
                <div>
                  <label style={labelStyle}>Nombre Completo:</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Teléfono:</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Empresa:</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <button
                  onClick={handleSave}
                  style={{
                    width: '100%',
                    padding: spacing.md,
                    backgroundColor: colors.secondary,
                    color: 'white',
                    border: 'none',
                    borderRadius: borderRadius.base,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: '250ms ease-in-out',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1e7e34'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = colors.secondary}
                >
                  💾 Guardar Cambios
                </button>
              </>
            ) : (
              <div style={{
                display: 'grid',
                gap: spacing.md,
              }}>
                <div>
                  <p style={{ color: colors.dark, marginBottom: spacing.sm }}>
                    <strong>Nombre:</strong> {formData.nombre}
                  </p>
                </div>
                <div>
                  <p style={{ color: colors.dark, marginBottom: spacing.sm }}>
                    <strong>Email:</strong> {formData.email}
                  </p>
                </div>
                <div>
                  <p style={{ color: colors.dark, marginBottom: spacing.sm }}>
                    <strong>Teléfono:</strong> {formData.telefono}
                  </p>
                </div>
                <div>
                  <p style={{ color: colors.dark, marginBottom: 0 }}>
                    <strong>Empresa:</strong> {formData.empresa}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Security Card */}
          <div style={{
            backgroundColor: colors.white,
            borderRadius: borderRadius.lg,
            padding: spacing.lg,
            boxShadow: shadows.base,
          }}>
            <h2 style={{ marginBottom: spacing.lg }}>Seguridad</h2>
            <div style={{ marginBottom: spacing.lg }}>
              <p style={{ color: colors.dark, marginBottom: spacing.md }}>
                <strong>Contraseña:</strong> ••••••••••
              </p>
              <button style={{
                padding: `${spacing.sm} ${spacing.md}`,
                backgroundColor: colors.warning,
                color: 'white',
                border: 'none',
                borderRadius: borderRadius.base,
                cursor: 'pointer',
                fontWeight: 'bold',
                marginBottom: spacing.lg,
              }}>
                Cambiar Contraseña
              </button>
            </div>
            <div>
              <p style={{ color: colors.dark, marginBottom: spacing.md }}>
                <strong>Factor de Autenticación:</strong> Desactivado
              </p>
              <button style={{
                padding: `${spacing.sm} ${spacing.md}`,
                backgroundColor: colors.info,
                color: 'white',
                border: 'none',
                borderRadius: borderRadius.base,
                cursor: 'pointer',
                fontWeight: 'bold',
              }}>
                Activar 2FA
              </button>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div style={{
          backgroundColor: colors.white,
          borderRadius: borderRadius.lg,
          padding: spacing.lg,
          boxShadow: shadows.base,
          marginBottom: spacing.xl,
        }}>
          <h2 style={{ marginBottom: spacing.lg }}>Preferencias</h2>
          <div style={{
            display: 'grid',
            gap: spacing.md,
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing.md,
              cursor: 'pointer',
            }}>
              <input type="checkbox" defaultChecked style={{ cursor: 'pointer' }} />
              <span>Recibir notificaciones por email</span>
            </label>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing.md,
              cursor: 'pointer',
            }}>
              <input type="checkbox" defaultChecked style={{ cursor: 'pointer' }} />
              <span>Recibir actualizaciones de envíos</span>
            </label>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing.md,
              cursor: 'pointer',
            }}>
              <input type="checkbox" style={{ cursor: 'pointer' }} />
              <span>Newsletter semanal</span>
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div style={{
          backgroundColor: '#fce4e4',
          borderRadius: borderRadius.lg,
          padding: spacing.lg,
          boxShadow: shadows.base,
          border: `2px solid ${colors.danger}`,
        }}>
          <h2 style={{ color: colors.danger, marginBottom: spacing.lg }}>Zona de Peligro</h2>
          <p style={{ color: colors.dark, marginBottom: spacing.lg }}>
            Las siguientes acciones son irreversibles. Por favor, procede con cuidado.
          </p>
          <button style={{
            padding: `${spacing.md} ${spacing.lg}`,
            backgroundColor: colors.danger,
            color: 'white',
            border: 'none',
            borderRadius: borderRadius.base,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}>
            🗑️ Eliminar Cuenta
          </button>
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          gap: spacing.md,
          marginTop: spacing.xl,
          justifyContent: 'center',
        }}>
          <a href="/home" style={{
            padding: `${spacing.md} ${spacing.lg}`,
            backgroundColor: colors.light,
            border: `2px solid ${colors.primary}`,
            borderRadius: borderRadius.base,
            color: colors.primary,
            textDecoration: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}>
            ← Volver
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
