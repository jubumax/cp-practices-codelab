/*
 * `Simplify File Path`
 * 
 * Given an absolute file path, simplify it.
 * 
 * The rules for simplification are:
 * 
 * . means the current directory and should be ignored.
 * .. means going up one directory level. If you are at the root directory, .. has no effect.
 * Multiple consecutive slashes (e.g., //) are treated as a single slash.
 * A path always starts with a single slash /.
 * A path does not end with a trailing / unless it is the root path itself (/).
 */


function simplifyPath(path) {
    const stack = [];

    for (const part of path.split("/")) {
        if (part === "" || part === ".") continue;

        if (part === "..") {
            if (stack.length > 0) stack.pop();

        } else {
            stack.push(part);
        }
    }

    return "/" + stack.join("/");
}


console.log(simplifyPath("/home/"));                        // "/home"
console.log(simplifyPath("/home//foo/"));                   // "/home/foo"
console.log(simplifyPath("/a/./b/../../c/"));               // "/c"
console.log(simplifyPath("/.hidden/../x"));                 // "/x"
console.log(simplifyPath("/../"));                          // "/"
console.log(simplifyPath("///"));                           // "/"
console.log(simplifyPath("/..."));                          // "/..."