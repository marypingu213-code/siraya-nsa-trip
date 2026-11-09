# 依館內「湖丘之物」植物標本展示櫃重新繪製的標本插圖（400×300）
import math, os, random
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "img", "plants")
BG = '<rect width="400" height="300" rx="18" fill="#f7f4ec"/>'
def svg(name, body):
    open(os.path.join(OUT, name + ".svg"), "w").write(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">{BG}{body}</svg>')
R = random.Random(7)

# 桃花心木：有翅膀的種子
def wing(x, y, a, s=1):
    return (f'<g transform="translate({x} {y}) rotate({a}) scale({s})">'
            '<path d="M0,0 C18,-14 70,-22 118,-12 C128,-9 128,6 118,9 C70,18 20,14 0,0Z" fill="#c9852f"/>'
            '<path d="M0,0 C10,-10 30,-12 42,-8 C46,-2 44,6 38,8 C26,10 10,8 0,0Z" fill="#7a3f12"/>'
            '<path d="M44,-2 C70,-6 95,-6 118,-2" stroke="#9b5a1c" stroke-width="1.5" fill="none"/></g>')
svg("mahogany", wing(70, 90, 20) + wing(150, 200, -25) + wing(230, 80, 40, .9) + wing(250, 230, -10, .8) + wing(60, 210, 5, .85))

# 大花紫薇：一串圓圓的果實
b = ['<path d="M80,270 L200,150 L260,60" stroke="#6b4a30" stroke-width="5" fill="none"/>']
pts = []
for i in range(16):
    t = i / 15; bx, by = 200 + 60 * t, 150 - 90 * t
    if t < 0.1: bx, by = 200 - 40 * (0.1 - t) * 10, 150 + 40 * (0.1 - t) * 10
    for sgn in (-1, 1):
        if R.random() < .85:
            px, py = bx + sgn * R.uniform(25, 55), by + R.uniform(-15, 20)
            b.append(f'<line x1="{bx:.0f}" y1="{by:.0f}" x2="{px:.0f}" y2="{py:.0f}" stroke="#6b4a30" stroke-width="2"/>')
            pts.append((px, py))
for px, py in pts:
    b.append(f'<circle cx="{px:.0f}" cy="{py:.0f}" r="13" fill="#5a3a22"/><path d="M{px-9:.0f},{py+9:.0f} l9,-4 l9,4" stroke="#2e1d10" stroke-width="2.5" fill="none"/>'
             f'<ellipse cx="{px-4:.0f}" cy="{py-4:.0f}" rx="3.5" ry="5" fill="#8a6447"/>')
svg("crapemyrtle", "".join(b))

# 羊蹄甲：前端裂開像羊蹄的葉子
v = "".join(f'<path d="M200,250 Q{200 + 150 * math.sin(a):.0f},{250 - 120 * math.cos(a):.0f} {200 + 125 * math.sin(a):.0f},{250 - 190 * math.cos(a):.0f}" stroke="#a8742c" stroke-width="2" fill="none"/>'
            for a in [x * 0.33 - 1.0 for x in range(7)])
svg("orchidtree", '<path d="M200,250 C80,240 40,140 80,70 C110,25 170,30 196,80 C230,30 290,25 320,70 C360,140 320,240 200,250Z" fill="#e2b264"/>' + v +
    '<path d="M200,250 L230,295" stroke="#7a5420" stroke-width="4"/>')

# 馬拉巴栗：有花紋的種子
s = ""
for i, (x, y) in enumerate([(110, 90), (190, 70), (280, 100), (140, 170), (230, 160), (300, 200), (170, 240), (90, 230)]):
    r = R.uniform(20, 26)
    s += (f'<ellipse cx="{x}" cy="{y}" rx="{r}" ry="{r * .85:.1f}" fill="#7b4b2a" transform="rotate({R.randint(0, 90)} {x} {y})"/>'
          f'<path d="M{x - r * .6:.0f},{y} q{r * .6:.0f},-{r * .5:.0f} {r * 1.2:.0f},0 M{x - r * .5:.0f},{y + 6} q{r * .5:.0f},-{r * .3:.0f} {r:.0f},0" stroke="#d9b48a" stroke-width="2.5" fill="none"/>')
svg("moneytree", s)

# 火焰木：像小船的果莢
svg("tuliptree", '<g transform="rotate(-20 200 150)"><path d="M40,150 C90,60 280,70 360,150 C280,215 100,220 40,150Z" fill="#6e4a2e"/>'
    '<path d="M50,150 C110,95 270,100 345,150 C270,190 120,195 50,150Z" fill="#c69a6a"/>'
    '<path d="M60,150 C150,135 250,135 340,150 M70,135 C160,115 250,120 330,140 M70,165 C160,180 250,178 330,160" stroke="#7b5634" stroke-width="2.5" fill="none"/></g>')

# 阿勃勒：長長的黑色果莢
seg = "".join(f'<line x1="{60 + i * 28}" y1="{243 - i * 19.5:.0f}" x2="{72 + i * 28}" y2="{258 - i * 19.5:.0f}" stroke="#4a4a40" stroke-width="2"/>' for i in range(1, 10))
svg("goldenshower", '<path d="M45,262 L345,48" stroke="#25221c" stroke-width="30" stroke-linecap="round"/>' + seg +
    '<path d="M345,48 l14,-14" stroke="#25221c" stroke-width="5" stroke-linecap="round"/>')

# 油桐：有皺紋的種子
def tung(x, y, a):
    return (f'<g transform="translate({x} {y}) rotate({a})"><path d="M0,-70 C45,-50 55,20 30,50 C10,70 -10,70 -30,50 C-55,20 -45,-50 0,-70Z" fill="#7a4526"/>'
            '<path d="M-28,-20 q10,8 22,0 M5,-30 q10,8 20,0 M-30,15 q14,8 26,0 M4,10 q12,8 24,0 M-14,40 q10,6 22,0" stroke="#a96a42" stroke-width="3" fill="none"/></g>')
svg("tung", tung(140, 150, -15) + tung(265, 160, 20))

# 桂花：一堆小小的花
f = ""
for i in range(220):
    x, y = R.gauss(200, 70), R.gauss(160, 45)
    c = R.choice(["#e6a85a", "#d98f3e", "#f0c27a", "#c97a32"])
    f += "".join(f'<ellipse cx="{x + 3 * math.cos(k * 1.57):.1f}" cy="{y + 3 * math.sin(k * 1.57):.1f}" rx="2.6" ry="2" fill="{c}"/>' for k in range(4))
svg("osmanthus", f)

# 銀樺：像羽毛的葉子
fr = '<path d="M60,280 C150,200 250,110 340,30" stroke="#6b3d28" stroke-width="4" fill="none"/>'
for i in range(1, 12):
    t = i / 12; x, y = 60 + 280 * t, 280 - 250 * t
    L = 70 * (1 - t * .6)
    for sgn in (-1, 1):
        a = math.radians(-40 + sgn * 70)
        fr += f'<path d="M{x:.0f},{y:.0f} L{x + L * math.cos(a):.0f},{y + L * math.sin(a):.0f}" stroke="#7a4632" stroke-width="5" stroke-linecap="round"/>'
svg("silveroak", fr)

# 茄苳：圓圓亮亮的果實
svg("bishopwood", "".join(f'<circle cx="{x}" cy="{y}" r="26" fill="#a8683a"/><circle cx="{x}" cy="{y}" r="26" fill="none" stroke="#7a4524" stroke-width="3"/><ellipse cx="{x - 8}" cy="{y - 9}" rx="7" ry="5" fill="#d9a77a"/>'
                         for x, y in [(130, 100), (210, 80), (290, 110), (160, 190), (250, 200)]))

# 樟樹：木頭切片（年輪）
rings = "".join(f'<circle cx="200" cy="150" r="{r}" fill="none" stroke="#c89a62" stroke-width="2"/>' for r in range(12, 110, 12))
svg("camphor", '<circle cx="200" cy="150" r="128" fill="#5e3a22"/><circle cx="200" cy="150" r="112" fill="#e7bf86"/>' + rings + '<circle cx="200" cy="150" r="5" fill="#a87440"/>')

# 大葉欖仁：紅褐色的大葉子
veins = "".join(f'<path d="M{110 + i * 25},{235 - i * 22} q{20 + i},-30 {48 - i * 2},-45 M{110 + i * 25},{235 - i * 22} q30,10 {58 - i * 3},4" stroke="#5e2418" stroke-width="2" fill="none"/>' for i in range(8))
svg("almond", '<path d="M80,270 C40,220 70,140 150,110 C230,70 330,50 350,30 C350,110 300,200 230,240 C180,270 120,290 80,270Z" fill="#8c3b26"/>' + veins +
    '<path d="M80,270 C160,200 260,110 350,30" stroke="#4d1c12" stroke-width="3" fill="none"/>')
