with open(r"e:\quantcarft new\src\components\sections\Timeline\index.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if "title=\"EVENT" in line:
            print(f"Line {i+1}: {repr(line)}")
