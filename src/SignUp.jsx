import React, { useState } from 'react';
import Header from './Header';
import { colors, spacing, borderRadius, shadows } from './styles/colors';

const SignUp = () => {
  const [usuario, setUsuario] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    confirmarContraseña: '',
    empresa: '',
    telefono: ''
  });

  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState(''); // 'success' o 'error'

  const handleLogout = () => {
    setUsuario(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.contraseña || !formData.confirmarContraseña) {
      setMensaje('❌ Por favor completa todos los campos requeridos');
      setTipoMensaje('error');
      return;
    }

    if (formData.contraseña.length < 6) {
      setMensaje('❌ La contraseña debe tener al menos 6 caracteres');
      setTipoMensaje('error');
      return;
    }

    if (formData.contraseña !== formData.confirmarContraseña) {
      setMensaje('❌ Las contraseñas no coinciden');
      setTipoMensaje('error');
      return;
    }

    // Guardar el usuario
    localStorage.setItem('usuarioActual', formData.nombre);
    setMensaje(`✓ ¡Registro exitoso! Bienvenido ${formData.nombre}`);
    setTipoMensaje('success');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      contraseña: '',
      confirmarContraseña: '',
      empresa: '',
      telefono: ''
    });

    // Redirigir al dashboard después de 2 segundos
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 2000);
  };

  const inputStyle = {
    width: '100%',
    padding: spacing.md,
    marginBottom: spacing.md,
    border: `1px solid ${colors.borderColor}`,
    borderRadius: borderRadius.base,
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: '250ms ease-in-out',
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
      
      <div style={{
        padding: `${spacing.xl} ${spacing.lg}`,
        maxWidth: '500px',
        margin: '0 auto',
      }}>
        {/* Card Container */}
        <div style={{
          backgroundColor: colors.white,
          borderRadius: borderRadius.lg,
          padding: spacing.xl,
          boxShadow: shadows.lg,
        }}>
          <div style={{ textAlign: 'center', marginBottom: spacing.xl }}>
            <div style={{
              fontSize: '56px',
              marginBottom: spacing.md,
            }}>
              🚀
            </div>
            <h1 style={{ marginBottom: spacing.sm }}>Crea tu Cuenta</h1>
            <p style={{ color: colors.dark, marginBottom: 0 }}>
              Únete a MAERSK y accede a servicios de transporte marítimo de clase mundial.
            </p>
          </div>

          {/* Message */}
          {mensaje && (
            <div style={{
              backgroundColor: tipoMensaje === 'success' ? colors.secondary : colors.danger,
              color: 'white',
              padding: spacing.md,
              borderRadius: borderRadius.base,
              marginBottom: spacing.lg,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
              {mensaje}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Nombre */}
            <div>
              <label style={labelStyle}>
                Nombre Completo: <span style={{ color: colors.danger }}>*</span>
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Tu nombre completo"
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.borderColor}
              />
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>
                Email: <span style={{ color: colors.danger }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                placeholder="tu@email.com"
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.borderColor}
              />
            </div>

            {/* Empresa */}
            <div>
              <label style={labelStyle}>Empresa:</label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Tu empresa (opcional)"
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.borderColor}
              />
            </div>

            {/* Teléfono */}
            <div>
              <label style={labelStyle}>Teléfono:</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                style={inputStyle}
                placeholder="+34 912 34 56 78"
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.borderColor}
              />
            </div>

            {/* Contraseña */}
            <div>
              <label style={labelStyle}>
                Contraseña: <span style={{ color: colors.danger }}>*</span>
              </label>
              <input
                type="password"
                name="contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Mínimo 6 caracteres"
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.borderColor}
              />
            </div>

            {/* Confirmar Contraseña */}
            <div>
              <label style={labelStyle}>
                Confirmar Contraseña: <span style={{ color: colors.danger }}>*</span>
              </label>
              <input
                type="password"
                name="confirmarContraseña"
                value={formData.confirmarContraseña}
                onChange={handleChange}
                style={inputStyle}
                placeholder="Repite la contraseña"
                onFocus={(e) => e.target.style.borderColor = colors.primary}
                onBlur={(e) => e.target.style.borderColor = colors.borderColor}
              />
            </div>

            {/* Términos */}
            <label style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing.md,
              cursor: 'pointer',
              marginBottom: spacing.lg,
              color: colors.dark,
            }}>
              <input type="checkbox" defaultChecked style={{ cursor: 'pointer' }} />
              <span style={{ fontSize: '14px' }}>
                Acepto los términos y condiciones
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: spacing.lg,
                backgroundColor: colors.primary,
                color: 'white',
                border: 'none',
                borderRadius: borderRadius.base,
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: '250ms ease-in-out',
                marginBottom: spacing.md,
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.primaryDark}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary}
            >
              ✓ Crear Cuenta
            </button>

            {/* Login Link */}
            <div style={{ textAlign: 'center', color: colors.dark }}>
              <p style={{ marginBottom: 0 }}>
                ¿Ya tienes cuenta? 
                <a href="/home" style={{
                  color: colors.primary,
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  marginLeft: spacing.sm,
                }}>
                  Inicia sesión aquí
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Footer Link */}
        <div style={{ textAlign: 'center', marginTop: spacing.xl }}>
          <a href="/landing" style={{
            color: colors.primary,
            textDecoration: 'none',
            fontWeight: 'bold',
          }}>
            ← Volver a la página principal
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
