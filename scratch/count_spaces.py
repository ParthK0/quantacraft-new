with open(r"e:\quantcarft new\src\components\sections\Timeline\index.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()
    for i, line in enumerate(lines):
        if "title=\"EVENT" in line:
            import re
            match = re.search(r'title="(.*?)"', line)
            if match:
                title = match.group(1)
                print(f"Title: '{title}'")
                print(f"Length: {len(title)}")
                print(f"Spaces between words: {title.count(' ')}")
                # Find the gap between EVENT and TIMELINE
                gap = re.search(r'EVENT(\s+)TIMELINE', title)
                if gap:
                    print(f"Gap size: {len(gap.group(1))}")
