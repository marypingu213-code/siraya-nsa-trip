// QR 答題共用：PeerJS 連線設定、台灣語音、寶石圖示
const GEM = '<svg viewBox="0 0 100 80" aria-hidden="true"><polygon points="20,6 80,6 96,30 50,76 4,30" fill="#4fbfca"/><polygon points="20,6 35,30 4,30" fill="#9ed9d4"/><polygon points="50,6 65,30 35,30" fill="#9ed9d4"/><polygon points="80,6 96,30 65,30" fill="#9ed9d4"/><polygon points="35,30 65,30 50,76" fill="#9ed9d4"/><g fill="none" stroke="#1f2a2a" stroke-width="5" stroke-linejoin="round"><polygon points="20,6 80,6 96,30 50,76 4,30"/><polyline points="4,30 96,30"/><polyline points="20,6 35,30 50,6 65,30 80,6"/><polyline points="35,30 50,76 65,30"/></g></svg>';
const QS = new URLSearchParams(location.search);
// 預設用 PeerJS 公用伺服器；測試時可用 ?peerhost=localhost&peerport=9000 指定自架伺服器
function peerOptions() {
  const h = QS.get("peerhost");
  return h ? { host: h, port: +QS.get("peerport") || 9000, path: "/", secure: location.protocol === "https:" } : {};
}
function passThrough() {
  const p = new URLSearchParams();
  ["peerhost", "peerport"].forEach(k => QS.get(k) && p.set(k, QS.get(k)));
  return p.toString();
}
const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (e) { return d; } };
const store = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } };
const rid = n => Array.from(crypto.getRandomValues(new Uint8Array(n)), b => "abcdefghjkmnpqrstuvwxyz23456789"[b % 31]).join("");
// 朗讀：優先台灣國語
const TW_NAME = /台灣|臺灣|Taiwan|HsiaoChen|HsiaoYu|Hanhan|Yating|Zhiwei|YunJhe|Mei-?Jia/i;
function speak(text) {
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = "zh-TW"; u.rate = 0.85;
    const vs = speechSynthesis.getVoices();
    const v = vs.find(v => /zh[-_]TW/i.test(v.lang) || TW_NAME.test(v.name)) || vs.find(v => /^zh/i.test(v.lang));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (e) {}
}
try { speechSynthesis.getVoices(); } catch (e) {}
