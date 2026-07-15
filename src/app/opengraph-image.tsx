import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Bella Skin Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#E8E3DC',
          backgroundImage: 'radial-gradient(circle at 85% 20%, #DDD6C9 0%, #E8E3DC 55%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: '#2B2824',
          }}
        >
          BELLA SKIN STUDIO
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 500,
              color: '#2B2824',
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            Modern skin care, reimagined.
          </div>
          <div style={{ fontSize: 28, color: '#6B6459', fontWeight: 400 }}>
            Aesthetic &amp; dermatology clinic
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#2B2824',
          }}
        >
          <div style={{ display: 'flex' }}>bellaskin.webpaitech.com</div>
        </div>
      </div>
    ),
    { ...size }
  )
}