sed '1s;^;#!/usr/bin/env node\n;' dist/main.js > /tmp/main.js
rm dist/main.js
mv /tmp/main.js dist/main.js
chmod +x dist/main.js