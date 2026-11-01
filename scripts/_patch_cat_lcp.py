from pathlib import Path
p = Path("components/kaomoji/category-view.tsx")
t = p.read_text(encoding="utf-8")
a = 'className="mt-4 type-h1 tracking-tight"'
b = 'className="mt-4 type-h1 lcp-hero tracking-tight"'
c = 'className="mt-3 max-w-2xl whitespace-pre-line type-body text-muted"'
d = 'className="mt-3 max-w-2xl whitespace-pre-line type-body text-muted lcp-hero"'
# try alternate patterns from file
if a not in t:
    # find actual h1/intro class lines
    for i,line in enumerate(t.splitlines(),1):
        if "type-h1" in line or ("page.intro" in line):
            print(f"{i}:{line}")
else:
    t = t.replace(a,b,1).replace(c,d,1)
    p.write_text(t, encoding="utf-8")
    print("patched")
