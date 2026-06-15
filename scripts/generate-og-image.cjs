'use strict';

const path = require('path');
const fs = require('fs');

const root = path.join(__dirname, '..');
const { ImageResponse } = require(
  path.join(root, 'node_modules/next/dist/compiled/@vercel/og/index.node.js')
);

async function main() {
  const response = new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 40%, #7c3aed 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        },
        children: [
          // Decorative circle
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute', top: '-120px', right: '-120px',
                width: '500px', height: '500px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)', display: 'flex',
              },
            },
          },
          // Main content wrapper
          {
            type: 'div',
            props: {
              style: {
                display: 'flex', flexDirection: 'column',
                padding: '64px 80px', height: '100%', justifyContent: 'space-between',
              },
              children: [
                // Top bar: logo + badge
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: { display: 'flex', alignItems: 'center', gap: '16px' },
                          children: [
                            {
                              type: 'div',
                              props: {
                                style: {
                                  width: '56px', height: '56px',
                                  background: 'rgba(255,255,255,0.2)',
                                  borderRadius: '14px', display: 'flex',
                                  alignItems: 'center', justifyContent: 'center',
                                },
                                children: [{
                                  type: 'div',
                                  props: { style: { width: '32px', height: '32px', background: 'white', borderRadius: '6px', display: 'flex' } },
                                }],
                              },
                            },
                            {
                              type: 'span',
                              props: {
                                style: { color: 'white', fontSize: '32px', fontWeight: '800' },
                                children: 'OmniWTMS',
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: {
                            background: 'rgba(255,255,255,0.15)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '100px', padding: '8px 20px',
                            display: 'flex', alignItems: 'center', gap: '8px',
                          },
                          children: [
                            { type: 'div', props: { style: { width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', display: 'flex' } } },
                            { type: 'span', props: { style: { color: 'white', fontSize: '16px', fontWeight: '600' }, children: '250+ UK Companies' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                // Headline section
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', flexDirection: 'column', gap: '20px' },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex', alignItems: 'center', gap: '10px',
                            background: 'rgba(255,255,255,0.12)',
                            borderRadius: '100px', padding: '8px 18px', width: 'fit-content',
                          },
                          children: [
                            { type: 'span', props: { style: { color: '#fbbf24', fontSize: '20px' }, children: '★' } },
                            { type: 'span', props: { style: { color: 'rgba(255,255,255,0.9)', fontSize: '17px', fontWeight: '600' }, children: "UK's #1 AI-Powered Logistics Platform" } },
                          ],
                        },
                      },
                      {
                        type: 'div',
                        props: {
                          style: { display: 'flex', flexDirection: 'column' },
                          children: [
                            {
                              type: 'span',
                              props: {
                                style: { color: 'white', fontSize: '60px', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-1px' },
                                children: 'Warehouse & Transport',
                              },
                            },
                            {
                              type: 'span',
                              props: {
                                style: { color: '#93c5fd', fontSize: '60px', fontWeight: '900', lineHeight: '1.1', letterSpacing: '-1px' },
                                children: 'Management System',
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: 'p',
                        props: {
                          style: { color: 'rgba(255,255,255,0.8)', fontSize: '22px', margin: '0', lineHeight: '1.4' },
                          children: 'Real-time tracking · AI route optimisation · 48-hour setup',
                        },
                      },
                    ],
                  },
                },
                // Stats row
                {
                  type: 'div',
                  props: {
                    style: { display: 'flex', gap: '24px' },
                    children: [
                      ['38%', 'Faster Deliveries'],
                      ['99.9%', 'Pick Accuracy'],
                      ['48hrs', 'Go-Live Time'],
                      ['£0', 'Setup Fee'],
                    ].map(([value, label]) => ({
                      type: 'div',
                      props: {
                        style: {
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '16px', padding: '18px 24px',
                          display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '140px',
                        },
                        children: [
                          { type: 'span', props: { style: { color: 'white', fontSize: '34px', fontWeight: '800', lineHeight: '1' }, children: value } },
                          { type: 'span', props: { style: { color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: '500' }, children: label } },
                        ],
                      },
                    })),
                  },
                },
              ],
            },
          },
        ],
      },
    },
    { width: 1200, height: 630 }
  );

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const outPath = path.join(root, 'public', 'og-image.png');
  fs.writeFileSync(outPath, buffer);
  console.log('Saved ' + buffer.length + ' bytes to ' + outPath);

  // Copy as og-image.jpg too — social crawlers check Content-Type, not extension
  // but for local static serving we need the correct format.
  // PNG is accepted by all major platforms (Facebook, Twitter, LinkedIn).
  // Update metadata references if you prefer the .png filename.
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
