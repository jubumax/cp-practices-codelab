/*
 * `Compare Version Numbers`
 * 
 * Compare two version strings version1 and version2 and return -1, 0, or 1.
 * A version string consists of one or more revisions separated by a dot .. Each revision contains digits and can have leading zeros. 
 * Revisions are compared numerically from left to right.
 * If one version string has fewer revisions than the other, treat the missing revisions as 0.
 * 
 * Return 1 if version1 > version2
 * Return -1 if version1 < version2
 * Return 0 if version1 === version2
 */


function compareVersions(version1, version2) {
    const parts1 = version1.split(".").map(Number);
    const parts2 = version2.split(".").map(Number);
    const length = Math.max(parts1.length, parts2.length);

    for (let i = 0; i < length; i++) {
        const a = parts1[i] ?? 0;
        const b = parts2[i] ?? 0;

        if (a > b) return 1;
        if (a < b) return -1;
    }

    return 0;
}


console.log(compareVersions("1.0.1", "1"));                             // 1
console.log(compareVersions("0.1", "1.1"));                             // -1
console.log(compareVersions("1", "1"));                                 // 0
console.log(compareVersions("1.01", "1.001"));                          // 0 (leading zero)
console.log(compareVersions("1.0", "1.0.0"));                           // 0 (missing revision = 0)
console.log(compareVersions("1.2", "1.10"));                            // -1 (numeric compare, not string compare)