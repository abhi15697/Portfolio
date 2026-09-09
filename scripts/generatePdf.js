import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const candidates = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  'google-chrome',
  'google-chrome-stable',
  'chromium',
  'chromium-browser',
  'chrome'
];

let chromePath = null;
for (const cand of candidates) {
  if (cand.startsWith('/')) {
    if (fs.existsSync(cand)) {
      chromePath = `"${cand}"`;
      break;
    }
  } else {
    try {
      execSync(`which ${cand}`, { stdio: 'ignore' });
      chromePath = cand;
      break;
    } catch {}
  }
}

if (!chromePath) {
  console.log('Chrome binary not found; using existing PDF in public/ directory.');
  process.exit(0);
}

try {
  fs.mkdirSync('public', { recursive: true });
  const htmlFile = path.resolve('Abhishek_Resume_ReactNative.html');
  const outFile = path.resolve('public/Abhishek_Kumar_Srivastava_React_Native_Developer.pdf');
  execSync(`${chromePath} --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outFile}" "file://${htmlFile}"`, { stdio: 'inherit' });
  console.log(`Generated: ${outFile}`);
} catch (e) {
  console.warn('Notice: PDF generation skipped or completed with existing build.', e.message);
  process.exit(0);
}
