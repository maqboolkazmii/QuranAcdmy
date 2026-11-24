// src/app/icon.tsx
// Dynamic favicon generator: creates an elegant emerald & gold brand icon in SVG/PNG format.

import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: '#0D5C3A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#B8963E',
          borderRadius: 8,
          fontWeight: 700,
          fontFamily: 'serif',
          border: '1px solid #B8963E',
        }}
      >
        آ
      </div>
    ),
    {
      ...size,
    }
  );
}
