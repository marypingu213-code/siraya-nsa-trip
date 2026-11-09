# 由 src/game.html 產生兩個檔案：
#   index.html：GitHub Pages 網站首頁（圖片放在 img/）
#   download/寶石鑑定室_官田遊客中心.html：離線版，圖片全部內嵌，下載後雙擊即可開啟
import base64, io, os, re
from PIL import Image
root = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(root, "src", "game.html"), encoding="utf-8").read()
site_src = src  # 網站版直接讀 img/ 裡的圖片
cache = {}
def data_uri(name):
    if name not in cache:
        path = os.path.join(root, "img", name)
        if name.endswith(".svg"):
            cache[name] = "data:image/svg+xml;base64," + base64.b64encode(open(path, "rb").read()).decode()
        elif name.endswith(".png"):
            cache[name] = "data:image/png;base64," + base64.b64encode(open(path, "rb").read()).decode()
        else:
            im = Image.open(path).convert("RGB")
            im.thumbnail((1280, 1280))
            buf = io.BytesIO(); im.save(buf, "JPEG", quality=80, optimize=True)
            cache[name] = "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()
    return cache[name]
# 程式裡用變數組出來的路徑（景點圖、路線主視覺），改查內嵌的圖片表
dynamic = {
    "img: `img/${r}${n}.jpg`": "img: IMG[`img/${r}${n}.jpg`]",
    "url('img/hero-${rt.k}.jpg')": "url('${IMG[`img/hero-${rt.k}.jpg`]}')",
}
for a, b in dynamic.items():
    assert a in src, a
    src = src.replace(a, b)
names = sorted(f for f in os.listdir(os.path.join(root, "img")) if re.match(r"(canal|hill|cloud)\d|hero-", f))
table = "<script>const IMG = {" + ",".join(f'"img/{n}":"{data_uri(n)}"' for n in names) + "};</script>\n"
body = table + re.sub(r"img/([\w/-]+\.(?:jpg|png|svg))", lambda m: data_uri(m.group(1)), src.replace("IMG[`img/", "IMG[`IMGPATH/"))
body = body.replace("IMG[`IMGPATH/", "IMG[`img/")
def page(body):
    return ('<!doctype html>\n<html lang="zh-Hant">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
        '<style>*,*::before,*::after{box-sizing:border-box}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>\n'
        '</head>\n<body>\n' + body + '\n</body>\n</html>\n')
open(os.path.join(root, "index.html"), "w", encoding="utf-8").write(page(site_src))
html = page(body)
out = os.path.join(root, "download", "寶石鑑定室_官田遊客中心.html")
open(out, "w", encoding="utf-8").write(html)
print(len(cache), "images,", round(os.path.getsize(out) / 1e6, 1), "MB")
