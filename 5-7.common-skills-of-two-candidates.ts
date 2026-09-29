/*
 * `Common Skills of Two Candidates?` 
 * 
 * Given two arrays of candidate skill names, find all skills shared by both candidates.
 * 
 * The comparison must be case-insensitive. The returned array must:
 * Contain each shared skill converted to lowercase.
 * Contain no duplicate values.
 * Be sorted alphabetically in ascending order.
 */


function commonSkills(skills1: string[], skills2: string[]): string[] {
    const set1 = new Set(skills1.map(skill => skill.toLowerCase()));
    const set2 = new Set(skills2.map(skill => skill.toLowerCase()));

    const shared = [...set1].filter(skill => set2.has(skill));

    return shared.sort();
}


console.log(commonSkills(["JavaScript", "Python", "C++"], ["python", "Java", "c++"]));              // ["c++", "python"]
console.log(commonSkills(["React", "react", "REACT"], ["React"]));                                  // ["react"]
console.log(commonSkills([], ["Java"]));                                                            // []
console.log(commonSkills(["Java"], []));                                                            // []
console.log(commonSkills([], []));                                                                  // []
console.log(commonSkills(["C#", "Node.js"], ["c#", "node.js", "python"]));                          // ["c#", "node.js"]