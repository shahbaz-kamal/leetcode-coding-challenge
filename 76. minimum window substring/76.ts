function minWindow(s: string, t: string): string {
    if (s.length === 0 || t.length === 0 || s.length < t.length) {
        return "";
    }

    // count required characters from t
    const mapT = new Map<string, number>();
    for (let i = 0; i < t.length; i++) {
        const ch = t[i];
        mapT.set(ch, (mapT.get(ch) || 0) + 1);
    }

    const required = mapT.size;   // number of UNIQUE chars needed
    let l = 0, r = 0;
    let create = 0;               // how many unique chars currently satisfied
    let ans: [number, number, number] = [-1, 0, 0]; // [length, start, end]
    const subStringMap = new Map<string, number>();

    while (r < s.length) {
        const c = s[r];
        const count = subStringMap.get(c) || 0;
        subStringMap.set(c, count + 1);

        // if count of c in window now matches requirement, one more char satisfied
        if (mapT.has(c) && subStringMap.get(c) === mapT.get(c)) {
            create++;
        }

        // window has all required chars -> try to shrink from the left
        while (l <= r && required === create) {
            const leftChar = s[l];

            // record smaller valid window
            if (ans[0] === -1 || ans[0] >= r - l + 1) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }

            subStringMap.set(leftChar, subStringMap.get(leftChar)! - 1);

            // removing leftChar breaks the requirement for it
            if (mapT.has(leftChar) && subStringMap.get(leftChar)! < mapT.get(leftChar)!) {
                create--;
            }
            l++;
        }
        r++;
    }

    if (ans[0] === -1) {
        return "";
    }

    return s.substring(ans[1], ans[2] + 1);
}