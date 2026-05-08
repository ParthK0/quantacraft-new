with open(r"e:\quantcarft new\src\components\sections\Timeline\index.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if "title=\"EVENT" in line:
            import re
            match = re.search(r'title="(.*?)"', line)
            if match:
                title = match.group(1)
                print(f"Title: {repr(title)}")
                print("Hex: " + " ".join([hex(ord(c)) for c in title]))
