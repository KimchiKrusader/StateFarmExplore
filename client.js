// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const panelMain = new Surface(
    300, /* x-coordinate */
    600, /* y-coordinate */
    Surface.SurfaceShape.Flat /* shape */
  );

  const panel1 = new Surface(
    300, /* x-coordinate */
    600, /* y-coordinate */
    Surface.SurfaceShape.Flat /* shape */
  );

  const panel2 = new Surface(
    300, /* x-coordinate */
    600, /* y-coordinate */
    Surface.SurfaceShape.Flat /* shape */
  );

  const panel3 = new Surface(
    300, /* x-coordinate */
    600, /* y-coordinate */
    Surface.SurfaceShape.Flat /* shape */
  );

  const panel4 = new Surface(
    300, /* x-coordinate */
    600, /* y-coordinate */
    Surface.SurfaceShape.Flat /* shape */
  );

  panelMain.setAngle(
    0, /* x-coordinate */
    0 /* pitch angle */
  );

  panel1.setAngle(
    2 * Math.PI / 5, /* yaw angle */
    0 /* pitch angle */
  );

  panel2.setAngle(
    4 * Math.PI / 5, /* yaw angle */
    0 /* pitch angle */
  );

  panel3.setAngle(
    6 * Math.PI / 5, /* yaw angle */
    0 /* pitch angle */
  );

  panel4.setAngle(
    8 * Math.PI / 5, /* yaw angle */
    0 /* pitch angle */
  );

  // Render your app content to the default cylinder surface
   /* r360.renderToSurface(
    r360.createRoot('StateFarmExplore', { /* initial props  }),
    r360.getDefaultSurface()
  ); */
  r360.renderToSurface(
    r360.createRoot('PanelMain'),
    panelMain,
  );
  r360.renderToSurface(
    r360.createRoot('Panel1'),
    panel1,
  );
  r360.renderToSurface(
    r360.createRoot('Panel2'),
    panel2,
  );
  r360.renderToSurface(
    r360.createRoot('Panel3'),
    panel3,
  );
  r360.renderToSurface(
    r360.createRoot('Panel4'),
    panel4,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
