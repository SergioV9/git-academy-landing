
import React, { useState } from 'react';
import Editor from './Editor';
import Header from '../Header';
import { colors, spacing, borderRadius, shadows } from '../styles/colors';

import styles from './index.module.css'

const Lms = () => {
    const [test, setTest] = useState('001');
    const [usuario, setUsuario] = useState(localStorage.getItem('usuarioActual') || null);

    const handleLogout = () => {
        setUsuario(null);
        localStorage.removeItem('usuarioActual');
    };

    return (
        <div style={{ backgroundColor: colors.light, minHeight: '100vh' }}>
            <Header usuario={usuario} onLogout={handleLogout} />
            
            {/* Toolbar */}
            <div style={{
                backgroundColor: colors.white,
                borderBottom: `1px solid ${colors.borderColor}`,
                padding: spacing.md,
            }}>
                <div style={{
                    maxWidth: '100%',
                    margin: '0 auto',
                    paddingLeft: spacing.lg,
                }}>
                    <h2 style={{ marginBottom: spacing.sm, fontSize: '18px' }}>💻 Editor de Código</h2>
                    <p style={{ margin: 0, color: colors.dark, fontSize: '14px' }}>
                        Edita tu código en tiempo real y visualiza los cambios al instante
                    </p>
                </div>
            </div>

            <div className={styles["editor-lms"]} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                height: 'calc(100vh - 200px)',
                gap: spacing.md,
                padding: spacing.md,
                backgroundColor: colors.light,
            }}>
                {/* Editor Panel */}
                <div style={{
                    backgroundColor: colors.white,
                    borderRadius: borderRadius.lg,
                    boxShadow: shadows.base,
                    overflow: 'hidden',
                }}>
                    <Editor setTest={setTest} />
                </div>

                {/* Preview Panel */}
                <div style={{
                    backgroundColor: colors.white,
                    borderRadius: borderRadius.lg,
                    boxShadow: shadows.base,
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <div style={{
                        padding: spacing.md,
                        borderBottom: `1px solid ${colors.borderColor}`,
                        backgroundColor: colors.light,
                    }}>
                        <p style={{ margin: 0, fontWeight: 'bold', color: colors.dark }}>
                            👀 Vista Previa
                        </p>
                    </div>
                    <div className={styles["editor-container"]} style={{ flex: 1, overflow: 'hidden' }}>
                        <iframe
                            className={styles["editor-iframe"]}
                            id="iframe"
                            title="Contenido externo"
                            src={`/test/${test}`}
                            frameBorder="0"
                            allowFullScreen
                            style={{ width: '100%', height: '100%', border: 'none' }}
                        />
                    </div>
                </div>
            </div>

            {/* Footer Navigation */}
            <div style={{
                backgroundColor: colors.white,
                borderTop: `1px solid ${colors.borderColor}`,
                padding: spacing.lg,
                textAlign: 'center',
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
                    marginRight: spacing.md,
                    transition: '250ms ease-in-out',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f4ff'}
                onMouseLeave={(e) => e.target.style.backgroundColor = colors.light}
                >
                    ← Volver
                </a>
                <a href="/simple" style={{
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
                    Ir al Contador →
                </a>
            </div>
        </div>
    );
};

export default Lms;
