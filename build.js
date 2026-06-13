const fs = require('fs');
const path = require('path');

const screens = [
  { src: 'energy_overview.html', dest: 'index.html' },
  { src: 'hostel_map.html', dest: 'hostel_map.html' },
  { src: 'sustainability_impact.html', dest: 'sustainability_impact.html' },
  { src: 'ai_advisor.html', dest: 'ai_advisor.html' },
  { src: 'savings_timeline.html', dest: 'savings_timeline.html' }
];

const tempDir = path.join(__dirname, 'temp_stitch');
const outDir = __dirname;

// Clean up unused/deleted HTML pages from root directory
const filesToDelete = ['dormpulse_flow.html', 'room_insights.html', 'shader.html', 'sdg7_goals.html'];
filesToDelete.forEach(file => {
  const filePath = path.join(outDir, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Deleted unused page: ${file}`);
  }
});

// Define the unified Tailwind configuration
const tailwindConfigHtml = `
<script id="tailwind-config">
  tailwind.config = {
    theme: {
      extend: {
        "colors": {
          "primary": "#006e2f",            // Leaf Green
          "primary-container": "#22c55e",  // Vibrant Green Accent
          "on-primary": "#ffffff",
          "secondary": "#00668a",          // Sky/Water Blue
          "secondary-container": "#40c2fd",// Vibrant Sky Blue
          "on-secondary": "#ffffff",
          "tertiary": "#006d30",           // Forest Green
          "tertiary-container": "#5ebf74", // Light Green Accent
          "on-tertiary": "#ffffff",
          "background": "#f8faf4",         // Extremely soft warm white/greenish-beige background
          "on-background": "#00210a",      // Legible deep forest text
          "surface": "#f8faf4",            // Matching background
          "on-surface": "#00210a",         // Legible deep forest text
          "surface-container": "#ecefe9",  // Slightly darker warm white/gray
          "surface-container-low": "#f2f4ee",
          "surface-container-lowest": "#ffffff",
          "surface-container-high": "#e7e9e3",
          "surface-container-highest": "#e1e3dd",
          "on-surface-variant": "#3d4a3d", // Organic slate gray for labels
          "outline": "#6d7b6c",
          "outline-variant": "#bccbb9",
          "error": "#ba1a1a",
          "error-container": "#ffdad6",
          "on-error": "#ffffff",
          "on-error-container": "#93000a"
        },
        "borderRadius": {
          "DEFAULT": "0.5rem",
          "lg": "0.75rem",
          "xl": "1rem",
          "2xl": "1.5rem",
          "3xl": "2rem",
          "full": "9999px"
        },
        "spacing": {
          "max-width": "1280px",
          "margin-desktop": "4rem",
          "cluster-gap": "1.75rem",
          "zone-padding": "2.5rem",
          "margin-mobile": "1.25rem"
        },
        "fontFamily": {
          "sans": ["Outfit", "sans-serif"]
        }
      }
    }
  }
</script>
`;

// Define the unified navigation header
const headerHtml = `
<!-- TopNavBar Shared Component -->
<nav class="fixed top-0 w-full z-50 backdrop-blur-xl bg-surface/90 border-b border-surface-variant/30 shadow-[0px_2px_15px_rgba(0,110,47,0.02)]">
  <div class="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-max-width mx-auto">
    <!-- Brand Logo -->
    <a class="flex items-center gap-2 group cursor-pointer" href="index.html">
      <span class="material-symbols-outlined text-primary text-2xl filled group-hover:rotate-12 transition-transform duration-300">energy_savings_leaf</span>
      <span class="font-bold text-lg tracking-tight text-primary">DORMPULSE</span>
    </a>
    
    <!-- Navigation Links -->
    <ul class="hidden md:flex items-center gap-8">
      <li>
        <a class="text-on-surface-variant font-medium text-sm hover:text-primary transition-all duration-300 pb-1" href="index.html" id="nav-overview">Overview</a>
      </li>
      <li>
        <a class="text-on-surface-variant font-medium text-sm hover:text-primary transition-all duration-300 pb-1" href="hostel_map.html" id="nav-hostel-map">Hostel Map</a>
      </li>
      <li>
        <a class="text-on-surface-variant font-medium text-sm hover:text-primary transition-all duration-300 pb-1" href="sustainability_impact.html" id="nav-impact">Impact</a>
      </li>
      <li>
        <a class="text-on-surface-variant font-medium text-sm hover:text-primary transition-all duration-300 pb-1" href="ai_advisor.html" id="nav-ai-advisor">AI Advisor</a>
      </li>
      <li>
        <a class="text-on-surface-variant font-medium text-sm hover:text-primary transition-all duration-300 pb-1" href="savings_timeline.html" id="nav-savings">Savings</a>
      </li>
    </ul>

    <!-- Trailing Actions -->
    <div class="flex items-center gap-4">
      <div class="hidden md:flex items-center gap-4">
        <button class="text-on-surface-variant hover:text-primary transition-colors duration-300 flex items-center justify-center p-1.5 rounded-full hover:bg-surface-container-low" aria-label="Notifications">
          <span class="material-symbols-outlined text-xl">notifications_active</span>
        </button>
        <button class="text-on-surface-variant hover:text-primary transition-colors duration-300 flex items-center justify-center p-1.5 rounded-full hover:bg-surface-container-low" aria-label="Profile">
          <span class="material-symbols-outlined text-xl">account_circle</span>
        </button>
      </div>
      <button class="bg-primary hover:bg-[#005321] text-on-primary px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_4px_12px_rgba(0,110,47,0.15)] hover:shadow-[0_6px_18px_rgba(0,110,47,0.25)] active:scale-95 whitespace-nowrap" onclick="openOptimizeModal()">
        Optimize Now
      </button>
      <!-- Mobile Menu Toggle -->
      <button class="md:hidden text-on-surface-variant flex items-center justify-center p-1.5 rounded-full hover:bg-surface-container-low" id="mobile-menu-btn" aria-label="Toggle Navigation Menu">
        <span class="material-symbols-outlined text-2xl">menu</span>
      </button>
    </div>
  </div>
  
  <!-- Mobile Navigation Dropdown -->
  <div class="hidden md:hidden border-t border-surface-variant/30 bg-surface/95 py-4 px-margin-mobile flex flex-col gap-3 shadow-lg" id="mobile-nav-menu">
    <a class="text-on-surface-variant font-medium text-sm hover:text-primary py-2 border-b border-surface-variant/10" href="index.html">Overview</a>
    <a class="text-on-surface-variant font-medium text-sm hover:text-primary py-2 border-b border-surface-variant/10" href="hostel_map.html">Hostel Map</a>
    <a class="text-on-surface-variant font-medium text-sm hover:text-primary py-2 border-b border-surface-variant/10" href="sustainability_impact.html">Impact</a>
    <a class="text-on-surface-variant font-medium text-sm hover:text-primary py-2 border-b border-surface-variant/10" href="ai_advisor.html">AI Advisor</a>
    <a class="text-on-surface-variant font-medium text-sm hover:text-primary py-2 border-b border-surface-variant/10" href="savings_timeline.html">Savings</a>
  </div>
</nav>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Dynamic active page styling
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    let activeId = 'nav-overview';
    if (page === 'hostel_map.html') activeId = 'nav-hostel-map';
    else if (page === 'sustainability_impact.html') activeId = 'nav-impact';
    else if (page === 'ai_advisor.html') activeId = 'nav-ai-advisor';
    else if (page === 'savings_timeline.html') activeId = 'nav-savings';
    
    const activeLink = document.getElementById(activeId);
    if (activeLink) {
      activeLink.className = "text-primary font-bold border-b-2 border-primary pb-1 text-sm";
    }

    // Mobile menu toggle logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-nav-menu');
    if (btn && menu) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
      });
      document.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    }
  });
</script>
`;

// Define the unified footer component
const footerHtml = `
<footer class="w-full py-zone-padding mt-zone-padding bg-surface-container-low/50 border-t border-surface-variant/20">
  <div class="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-cluster-gap max-w-max-width mx-auto">
    <div class="flex items-center gap-2">
      <span class="material-symbols-outlined text-primary text-xl filled">energy_savings_leaf</span>
      <span class="font-bold text-base tracking-tight text-primary">DORMPULSE</span>
    </div>
    <div class="flex flex-wrap justify-center gap-6">
      <a class="text-xs font-semibold tracking-wider uppercase text-on-surface-variant hover:text-primary transition-all duration-200" href="#">Energy Protocol</a>
      <a class="text-xs font-semibold tracking-wider uppercase text-on-surface-variant hover:text-primary transition-all duration-200" href="#">Privacy Policy</a>
      <a class="text-xs font-semibold tracking-wider uppercase text-on-surface-variant hover:text-primary transition-all duration-200" href="sustainability_impact.html">Impact Report</a>
      <a class="text-xs font-semibold tracking-wider uppercase text-on-surface-variant hover:text-primary transition-all duration-200" href="#">Support</a>
    </div>
    <div class="text-xs font-medium tracking-wide text-on-surface-variant text-center md:text-right">
      © 2026 DormPulse Ecosystem. Powered by AI for a greener planet.
    </div>
  </div>
</footer>
`;

// Define the global optimize now modal HTML
const optimizeModalHtml = `
<!-- Global Optimize Now Modal -->
<div id="optimize-modal" class="fixed inset-0 z-[100] hidden flex items-center justify-center p-4">
  <div class="absolute inset-0 bg-[#00210a]/40 backdrop-blur-sm" onclick="closeOptimizeModal()"></div>
  <div class="bg-white rounded-3xl p-8 max-w-md w-full relative z-10 shadow-2xl border border-surface-variant/30 transform transition-transform duration-300 scale-95 opacity-0" id="optimize-modal-card">
    <h3 class="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
      <span class="material-symbols-outlined animate-spin">sync</span> Optimizing Ecosystem...
    </h3>
    <div class="space-y-4 font-body-md text-body-md text-on-surface-variant">
      <p id="opt-step-1" class="flex items-center gap-2 opacity-50"><span class="material-symbols-outlined text-sm">circle</span> Analyzing HVAC baselines...</p>
      <p id="opt-step-2" class="flex items-center gap-2 opacity-50"><span class="material-symbols-outlined text-sm">circle</span> Checking room occupancy logs...</p>
      <p id="opt-step-3" class="flex items-center gap-2 opacity-50"><span class="material-symbols-outlined text-sm">circle</span> Triggering auto-shutoff for vacant zones...</p>
      <p id="opt-step-4" class="flex items-center gap-2 opacity-50"><span class="material-symbols-outlined text-sm">circle</span> Recalibrating lighting curves...</p>
    </div>
    <div class="mt-6 flex justify-end">
      <button id="opt-close-btn" class="bg-primary text-on-primary px-6 py-2 rounded-full font-medium opacity-50 cursor-not-allowed" disabled onclick="closeOptimizeModal()">
        Optimizing...
      </button>
    </div>
  </div>
</div>
<script>
  function openOptimizeModal() {
    const modal = document.getElementById('optimize-modal');
    const card = document.getElementById('optimize-modal-card');
    modal.classList.remove('hidden');
    setTimeout(() => {
      card.classList.remove('scale-95', 'opacity-0');
      card.classList.add('scale-100', 'opacity-100');
    }, 10);
    
    // Run simulated optimization steps
    const steps = [
      { id: 'opt-step-1', text: 'Analyzing HVAC baselines... Done!' },
      { id: 'opt-step-2', text: 'Checking room occupancy logs... Done!' },
      { id: 'opt-step-3', text: 'Triggering auto-shutoff for vacant zones... Done!' },
      { id: 'opt-step-4', text: 'Recalibrating lighting curves... Completed!' }
    ];
    
    steps.forEach((step, idx) => {
      setTimeout(() => {
        const el = document.getElementById(step.id);
        if (el) {
          el.innerHTML = '<span class="material-symbols-outlined text-primary text-sm font-bold">check_circle</span> ' + step.text;
          el.classList.remove('opacity-50');
          el.classList.add('text-on-surface');
        }
        
        if (idx === steps.length - 1) {
          const btn = document.getElementById('opt-close-btn');
          if (btn) {
            btn.disabled = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed');
            btn.innerText = 'All Done';
          }
        }
      }, (idx + 1) * 800);
    });
  }
  
  function closeOptimizeModal() {
    const modal = document.getElementById('optimize-modal');
    const card = document.getElementById('optimize-modal-card');
    card.classList.remove('scale-100', 'opacity-100');
    card.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      modal.classList.add('hidden');
      // Reset steps
      const steps = ['opt-step-1', 'opt-step-2', 'opt-step-3', 'opt-step-4'];
      const defaultTexts = [
        'Analyzing HVAC baselines...',
        'Checking room occupancy logs...',
        'Triggering auto-shutoff for vacant zones...',
        'Recalibrating lighting curves...'
      ];
      steps.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          el.innerHTML = '<span class="material-symbols-outlined text-sm">circle</span> ' + defaultTexts[idx];
          el.className = 'flex items-center gap-2 opacity-50';
        }
      });
      const btn = document.getElementById('opt-close-btn');
      if (btn) {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
        btn.innerText = 'Optimizing...';
      }
    }, 300);
  }
</script>
`;

screens.forEach(screen => {
  const srcPath = path.join(tempDir, screen.src);
  if (!fs.existsSync(srcPath)) {
    console.error(`Source file not found: ${srcPath}`);
    return;
  }

  let html = fs.readFileSync(srcPath, 'utf8');

  // 1. Purge all dark mode styles and elements
  html = html.replace(/\s*dark:[a-zA-Z0-9:-]+/g, '');
  html = html.replace(/class="light"/g, '');

  // 2. Inject standard Tailwind Config inside the <head>
  html = html.replace(/<script id="tailwind-config">[\s\S]*?<\/script>/, tailwindConfigHtml);

  // 3. Inject standard <body> tags
  html = html.replace(/<body[^>]*>/, '<body class="bg-background text-on-background font-sans min-h-screen flex flex-col pt-24 selection:bg-primary-container selection:text-on-primary-container">');

  // 4. Standardize the Header/Navbar
  // Replace everything between the start of body and the first <main> or <header> tag with our standardized header
  html = html.replace(/(<body[^>]*>)[\s\S]*?(<main|<header|<div class="max-w-max-width mx-auto px-margin-mobile)/, `$1\n${headerHtml}\n$2`);

  // 5. Standardize Footer
  html = html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/, footerHtml);

  // 6. Inject Global Interactivity Modal and script before closing </body>
  html = html.replace('</body>', `${optimizeModalHtml}\n<script type="module" src="/agentation-mount.js"></script>\n</body>`);

  // 7. Page specific interactivity features
  if (screen.dest === 'index.html') {
    // Embed WebGL flow shader code directly into current usage card background
    const shaderCanvasHtml = `
      <canvas id="shader-canvas-ANIMATION_3" style="display:block;width:100%;height:100%;position:absolute;inset:0;opacity:0.12;pointer-events:none;z-index:0;"></canvas>
    `;
    
    // Insert shader canvas inside Core Pulse cluster
    html = html.replace(
      '<!-- Core Pulse (Current Usage) -->',
      `<!-- Core Pulse (Current Usage) -->\n${shaderCanvasHtml}`
    );
    
    const shaderJs = `
      <script>
      (function() {
        const canvas = document.getElementById('shader-canvas-ANIMATION_3');
        if (!canvas) return;

        function syncSize() {
          const w = canvas.clientWidth  || 800;
          const h = canvas.clientHeight || 400;
          if (canvas.width !== w || canvas.height !== h) {
            canvas.width  = w;
            canvas.height = h;
          }
        }
        if (typeof ResizeObserver !== 'undefined') {
          new ResizeObserver(syncSize).observe(canvas);
        }
        syncSize();

        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return;
        const vs = \`attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }\`;
        const fs = \`precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
          vec2 uv = v_texCoord;
          
          float color = 0.0;
          for(float i = 1.0; i < 4.0; i++) {
              uv.y += 0.1 * sin(uv.x * 5.0 + u_time * 0.5 * i);
              uv.x += 0.1 * cos(uv.y * 3.0 + u_time * 0.3 * i);
              color += 0.01 / abs(uv.y - 0.5);
          }
          
          vec3 green = vec3(0.133, 0.772, 0.368); // #22C55E
          vec3 blue = vec3(0.219, 0.741, 0.972);  // #38BDF8
          vec3 backgroundColor = vec3(1.0, 1.0, 1.0); // white card bg
          
          vec3 finalColor = mix(backgroundColor, green, color);
          finalColor = mix(finalColor, blue, color * 0.5 * sin(u_time * 0.2));
          
          gl_FragColor = vec4(finalColor, 1.0);
      }\`;
        function cs(type, src) {
          const s = gl.createShader(type);
          gl.shaderSource(s, src);
          gl.compileShader(s);
          return s;
        }
        const prog = gl.createProgram();
        gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
        gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
        gl.linkProgram(prog);
        gl.useProgram(prog);
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
        const pos = gl.getAttribLocation(prog, 'a_position');
        gl.enableVertexAttribArray(pos);
        gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);
        const uTime = gl.getUniformLocation(prog, 'u_time');
        const uRes = gl.getUniformLocation(prog, 'u_resolution');

        function render(t) {
          if (typeof ResizeObserver === 'undefined') syncSize();
          gl.viewport(0, 0, canvas.width, canvas.height);
          if (uTime) gl.uniform1f(uTime, t * 0.001);
          if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
          requestAnimationFrame(render);
        }
        render(0);
      })();
      </script>
    `;
    html = html.replace('</body>', `${shaderJs}\n</body>`);
  }

  if (screen.dest === 'hostel_map.html') {
    // Inject dynamic hostel map inspector code
    const roomDataScript = `
      <script>
        const roomData = {
          "201": {
            name: "Room 201",
            status: "Efficient",
            statusClass: "bg-green-100 text-green-700 border-green-200",
            statusIcon: "eco",
            occupancy: "2/2",
            draw: "0.2 kW",
            drawClass: "text-green-600",
            appliances: [
              { name: "Lights (LED)", draw: "40W", icon: "lightbulb", iconClass: "text-primary" },
              { name: "Ceiling Fan", draw: "60W", icon: "mode_fan", iconClass: "text-primary" },
              { name: "Laptop Charger", draw: "45W", icon: "power", iconClass: "text-primary" }
            ]
          },
          "202": {
            name: "Room 202",
            status: "Wasteful",
            statusClass: "bg-red-100 text-red-700 border-red-200",
            statusIcon: "warning",
            occupancy: "0/2",
            draw: "1.2 kW",
            drawClass: "text-red-600",
            appliances: [
              { name: "AC Unit (Running)", draw: "800W", icon: "ac_unit", iconClass: "text-primary" },
              { name: "Lights (Empty Room)", draw: "120W", icon: "lightbulb", iconClass: "text-amber-500" },
              { name: "Monitor (Standby)", draw: "15W", icon: "desktop_windows", iconClass: "text-primary" }
            ]
          },
          "203": {
            name: "Room 203",
            status: "Automated",
            statusClass: "bg-blue-100 text-blue-700 border-blue-200",
            statusIcon: "smart_toy",
            occupancy: "1/2",
            draw: "0.3 kW",
            drawClass: "text-blue-600",
            appliances: [
              { name: "LED Study Lamp", draw: "15W", icon: "lightbulb", iconClass: "text-primary" },
              { name: "Smart Plug (Air Purifier)", draw: "80W", icon: "power", iconClass: "text-secondary" },
              { name: "Ceiling Fan (Low)", draw: "30W", icon: "mode_fan", iconClass: "text-primary" }
            ]
          },
          "204": {
            name: "Room 204 (Dorm)",
            status: "Efficient",
            statusClass: "bg-green-100 text-green-700 border-green-200",
            statusIcon: "eco",
            occupancy: "4/4",
            draw: "0.4 kW",
            drawClass: "text-green-600",
            appliances: [
              { name: "LED Ceiling Lights", draw: "80W", icon: "lightbulb", iconClass: "text-primary" },
              { name: "Ceiling Fans (2x)", draw: "120W", icon: "mode_fan", iconClass: "text-primary" },
              { name: "Mini Fridge (Eco Mode)", draw: "90W", icon: "kitchen", iconClass: "text-primary" }
            ]
          },
          "205": {
            name: "Room 205",
            status: "Efficient",
            statusClass: "bg-green-100 text-green-700 border-green-200",
            statusIcon: "eco",
            occupancy: "1/2",
            draw: "0.15 kW",
            drawClass: "text-green-600",
            appliances: [
              { name: "Desk Lamp", draw: "12W", icon: "lightbulb", iconClass: "text-primary" },
              { name: "Laptop Charger", draw: "65W", icon: "power", iconClass: "text-primary" }
            ]
          },
          "206": {
            name: "Room 206 (Dorm)",
            status: "Moderate",
            statusClass: "bg-amber-100 text-amber-700 border-amber-200",
            statusIcon: "info",
            occupancy: "3/4",
            draw: "0.85 kW",
            drawClass: "text-amber-600",
            appliances: [
              { name: "Ceiling Fans (2x)", draw: "120W", icon: "mode_fan", iconClass: "text-primary" },
              { name: "Mini Fridge (Active)", draw: "150W", icon: "kitchen", iconClass: "text-primary" },
              { name: "Water Dispenser", draw: "350W", icon: "water_drop", iconClass: "text-secondary" },
              { name: "Ambient Lights", draw: "60W", icon: "lightbulb", iconClass: "text-primary" }
            ]
          },
          "Lounge": {
            name: "Common Lounge",
            status: "Moderate",
            statusClass: "bg-amber-100 text-amber-700 border-amber-200",
            statusIcon: "info",
            occupancy: "8/15",
            draw: "2.4 kW",
            drawClass: "text-amber-600",
            appliances: [
              { name: "Large AC Unit", draw: "1600W", icon: "ac_unit", iconClass: "text-primary" },
              { name: "Ceiling Fans (4x)", draw: "240W", icon: "mode_fan", iconClass: "text-primary" },
              { name: "Smart TV Display", draw: "180W", icon: "tv", iconClass: "text-secondary" },
              { name: "Overhead Lighting", draw: "300W", icon: "lightbulb", iconClass: "text-primary" }
            ]
          },
          "Bath": {
            name: "Washroom Block",
            status: "Automated",
            statusClass: "bg-blue-100 text-blue-700 border-blue-200",
            statusIcon: "smart_toy",
            occupancy: "0/5",
            draw: "0.05 kW",
            drawClass: "text-blue-600",
            appliances: [
              { name: "Sensors & Controller", draw: "15W", icon: "settings_input_component", iconClass: "text-secondary" },
              { name: "Exhaust Fans (Standby)", draw: "30W", icon: "mode_fan", iconClass: "text-primary" }
            ]
          }
        };

        function selectRoom(roomId) {
          console.log("Inspecting room:", roomId);
          const data = roomData[roomId];
          if (!data) return;

          // Update titles & status
          document.querySelector('#room-inspector h2').innerText = data.name;
          const statusChip = document.querySelector('#room-inspector .flex.justify-between.items-start > div:last-child');
          if (statusChip) {
            statusChip.className = \`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1 \${data.statusClass}\`;
            statusChip.innerHTML = \`<span class="material-symbols-outlined text-[16px]">\${data.statusIcon}</span>\${data.status}\`;
          }

          // Update grids
          const grids = document.querySelectorAll('#room-inspector .grid.grid-cols-2 > div');
          if (grids.length >= 2) {
            // Occupancy
            grids[0].querySelector('.font-bold').innerText = data.occupancy;
            // Draw
            const drawEl = grids[1].querySelector('.font-bold');
            drawEl.innerText = data.draw;
            drawEl.className = \`font-bold \${data.drawClass}\`;
          }

          // Update appliances
          const list = document.querySelector('#room-inspector ul');
          if (list) {
            list.innerHTML = data.appliances.map(app => \`
              <li class="flex items-center justify-between p-3 bg-surface-container-low rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="bg-surface p-2 rounded-full shadow-sm \${app.iconClass}">
                    <span class="material-symbols-outlined text-[20px]">\${app.icon}</span>
                  </div>
                  <span class="text-sm font-medium">\${app.name}</span>
                </div>
                <span class="text-sm text-on-surface-variant">\${app.draw}</span>
              </li>
            \`).join('');
          }

          // Trigger Auto-Shutoff button update
          const actionBtn = document.querySelector('#room-inspector button');
          if (actionBtn) {
            if (data.status === 'Efficient' || data.status === 'Automated') {
              actionBtn.disabled = true;
              actionBtn.className = "w-full bg-surface-container-low text-outline/50 font-medium py-3 rounded-xl border border-surface-variant flex justify-center items-center gap-2 mt-2 cursor-not-allowed";
              actionBtn.innerHTML = \`<span class="material-symbols-outlined">check_circle</span> Already Optimized\`;
            } else {
              actionBtn.disabled = false;
              actionBtn.className = "w-full bg-surface-container-highest hover:bg-outline-variant text-on-surface font-medium py-3 rounded-xl transition-colors border border-outline-variant flex justify-center items-center gap-2 mt-2";
              actionBtn.innerHTML = \`<span class="material-symbols-outlined">power_settings_new</span> Trigger Auto-Shutoff\`;
              actionBtn.setAttribute('onclick', \`triggerAutoShutoff('\${roomId}')\`);
            }
          }

          // Scale animation
          const inspector = document.getElementById('room-inspector');
          if (inspector) {
            inspector.style.transform = 'scale(0.98)';
            setTimeout(() => {
                inspector.style.transform = 'scale(1)';
            }, 150);
          }
        }

        function triggerAutoShutoff(roomId) {
          const btn = document.querySelector('#room-inspector button');
          if (!btn) return;
          btn.disabled = true;
          btn.innerHTML = \`<svg class="animate-spin h-5 w-5 mr-2 text-on-surface" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Shutting off...\`;
          
          setTimeout(() => {
            // Update data status to Efficient
            const data = roomData[roomId];
            data.status = 'Automated';
            data.statusClass = 'bg-blue-100 text-blue-700 border-blue-200';
            data.statusIcon = 'smart_toy';
            data.draw = '0.1 kW';
            data.drawClass = 'text-blue-600';
            // Turn off AC / Lights in appliances list
            data.appliances = data.appliances.map(app => {
              if (app.name.includes('AC') || app.name.includes('Lights')) {
                return { ...app, name: app.name.replace('Running', 'Shutoff').replace('Empty Room', 'Off'), draw: '0W', iconClass: 'text-outline/50' };
              }
              return app;
            });
            
            // Re-render
            selectRoom(roomId);
            
            // Show toast message
            alert(\`Auto-shutoff successfully triggered for \${data.name}. HVAC and non-essential loads deactivated.\`);
          }, 1500);
        }
      </script>
    `;
    
    // Inject IDs on elements to target them
    html = html.replace('id="room-inspector"', 'id="room-inspector" style="transition: transform 0.2s ease;"');
    html = html.replace('</body>', `${roomDataScript}\n</body>`);
  }

  if (screen.dest === 'ai_advisor.html') {
    // Add dynamic Action Authorization logic
    const aiScript = `
      <script>
        document.addEventListener('DOMContentLoaded', () => {
          const authBtns = document.querySelectorAll('button');
          authBtns.forEach((btn, idx) => {
            if (btn.innerText.includes('Authorize Action')) {
              btn.setAttribute('onclick', \`authorizeBreakerAction(this, \${idx})\`);
            }
          });
        });

        function authorizeBreakerAction(btn, id) {
          if (btn.disabled) return;
          btn.disabled = true;
          btn.innerHTML = \`<svg class="animate-spin h-5 w-5 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Authorizing...\`;
          
          setTimeout(() => {
            btn.className = "bg-green-50 border border-green-200 text-green-700 px-6 py-2.5 rounded-full font-medium flex items-center gap-2";
            btn.innerHTML = \`<span class="material-symbols-outlined text-[20px]">check_circle</span> Isolation Complete\`;
            
            // Add success badge to card
            const card = btn.closest('article');
            if (card) {
              const header = card.querySelector('header');
              if (header) {
                const statusDiv = header.querySelector('div');
                if (statusDiv) {
                  statusDiv.className = "flex gap-3 items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full border border-green-200";
                  statusDiv.innerHTML = \`<span class="material-symbols-outlined text-[18px]">check_circle</span> Resolved\`;
                }
              }
            }
          }, 1500);
        }
      </script>
    `;
    html = html.replace('</body>', `${aiScript}\n</body>`);
  }

  if (screen.dest === 'savings_timeline.html') {
    // Add savings timeline interactive logic
    const savingsScript = `
      <script>
        const timelineData = {
          daily: {
            seedlings: "12<span class=\\"text-headline-md font-headline-md text-surface-tint\\">kWh</span>",
            seedlingsLabel: "15% less than yesterday",
            canopy: "4.2<span class=\\"text-headline-md font-headline-md text-surface-tint\\">kWh</span>",
            canopyLabel: "Saved 0.05 trees today",
            forest: "2.8<span class=\\"text-headline-md font-headline-md text-surface-tint\\">kg</span>",
            forestLabel: "CO2 emissions avoided today"
          },
          weekly: {
            seedlings: "84<span class=\\"text-headline-md font-headline-md text-surface-tint\\">kWh</span>",
            seedlingsLabel: "Saved 4 trees this week",
            canopy: "22<span class=\\"text-headline-md font-headline-md text-surface-tint\\">kWh</span>",
            canopyLabel: "Lounge automation active",
            forest: "15.4<span class=\\"text-headline-md font-headline-md text-surface-tint\\">kg</span>",
            forestLabel: "Equivalent to 1 week commute"
          },
          monthly: {
            seedlings: "340<span class=\\"text-headline-md font-headline-md text-surface-tint\\">kWh</span>",
            seedlingsLabel: "Powering a village for a day",
            canopy: "94<span class=\\"text-headline-md font-headline-md text-surface-tint\\">kWh</span>",
            canopyLabel: "HVAC setpoint auto-shifted",
            forest: "68.2<span class=\\"text-headline-md font-headline-md text-surface-tint\\">kg</span>",
            forestLabel: "Offset target reached by 98%"
          }
        };

        function switchTimeline(view, btn) {
          // Update buttons state
          const buttons = btn.parentElement.querySelectorAll('button');
          buttons.forEach(b => {
            b.className = "flex items-center justify-between p-4 rounded-xl border border-transparent hover:bg-surface-variant/50 text-on-surface-variant transition-all group";
            b.querySelector('span:last-child').className = "material-symbols-outlined opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all";
          });
          
          btn.className = "flex items-center justify-between p-4 rounded-xl border border-primary/20 bg-primary/5 text-primary transition-all group";
          btn.querySelector('span:last-child').className = "material-symbols-outlined group-hover:translate-x-1 transition-transform";
          
          // Update data values
          const data = timelineData[view];
          const cards = document.querySelectorAll('.grid.grid-cols-1.md\\\\:grid-cols-3 > div');
          if (cards.length >= 3) {
            // Card 1
            cards[0].querySelector('.font-display-lg').innerHTML = data.seedlings;
            cards[0].querySelector('.font-body-md').innerHTML = data.seedlingsLabel;
            
            // Card 2
            cards[1].querySelector('.font-display-lg').innerHTML = data.canopy;
            cards[1].querySelector('.font-body-md').innerHTML = data.canopyLabel;
            
            // Card 3
            cards[2].querySelector('.font-display-lg').innerHTML = data.forest;
            cards[2].querySelector('.font-body-md').innerHTML = data.forestLabel;
          }
        }

        document.addEventListener('DOMContentLoaded', () => {
          const selectorCard = document.querySelector('.col-span-1.lg\\\\:col-span-4');
          if (selectorCard) {
            const btns = selectorCard.querySelectorAll('button');
            if (btns.length >= 3) {
              btns[0].setAttribute('onclick', "switchTimeline('daily', this)");
              btns[1].setAttribute('onclick', "switchTimeline('weekly', this)");
              btns[2].setAttribute('onclick', "switchTimeline('monthly', this)");
            }
          }
        });
      </script>
    `;
    html = html.replace('</body>', `${savingsScript}\n</body>`);
  }

  // Write file out
  const destPath = path.join(outDir, screen.dest);
  fs.writeFileSync(destPath, html, 'utf8');
  console.log(`Successfully built ${screen.dest}`);
});

console.log('Build completed successfully!');
