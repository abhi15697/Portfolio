import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const candidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  'google-chrome',
  'google-chrome-stable',
  'chromium',
  'chromium-browser',
  'chrome',
  'msedge'
];

let chromePath = null;
for (const cand of candidates) {
  if (cand.includes('\\') || cand.startsWith('/')) {
    if (fs.existsSync(cand)) {
      chromePath = cand;
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
  console.log('Browser binary not found; using existing PDF in public/ directory.');
  process.exit(0);
}

try {
  fs.mkdirSync('public', { recursive: true });
  const htmlFile = path.resolve('Abhishek_Resume_ReactNative.html');
  const outFile = path.resolve('public/Abhishek_Kumar_Srivastava_React_Native_Developer.pdf');
  const fileUrl = pathToFileURL(htmlFile).href;
  
  console.log(`Using binary: ${chromePath}`);
  console.log(`Source: ${fileUrl}`);
  console.log(`Target: ${outFile}`);
  
  execSync(`"${chromePath}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${outFile}" "${fileUrl}"`, { stdio: 'inherit' });
  console.log(`Generated: ${outFile}`);
} catch (e) {
  console.warn('Notice: PDF generation skipped or completed with existing build.', e.message);
  process.exit(0);
}
