'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

// Props do Cloud
export const cloudProps = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 5,
    },
  },
  options: {
    reverse: false,           // false = rotação normal, true = inversa
    depth: 0.08,              // profundidade 3D
    wheelZoom: false,          // desativa zoom do mouse
    imageScale: 4,             // escala dos ícones
    initial: [0.15, -0.1],     // velocidade inicial [x, y]
    clickToFront: 500,         // animação ao clicar no ícone
    tooltip: 'native',
    tooltipDelay: 0,
    maxSpeed: 0.12,            // velocidade máxima
    minSpeed: 0.03,            // velocidade mínima
  },
};

// Função para renderizar ícones com cores/tamanho customizados
export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510';
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff';

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    size: 30,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

// Componente IconCloud
export function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs })
      .then(setData)
      .catch((err) => {
        console.error('Erro ao buscar ícones:', err);
        setData({ simpleIcons: {} }); // fallback vazio
      });
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || 'light')
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
