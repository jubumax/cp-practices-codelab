/*
 * `Nested Folder File Counter`
 * 
 * Given a nested folder structure containing files and subfolders, count the total number of files present in the 
 * entire structure, including those within any subfolders.
 * 
 * The folder structure is represented as an array of objects. Each object can be either a file or a folder:
 * 
 * A file object has type: 'file'.
 * A folder object has type: 'folder' and a children property, which is an array of other file or folder objects.
 */


function countFilesInFolder(items) {
    let total = 0;

    for (const item of items) {
        if (item.type === "file") {
            total += 1;
        } else if (item.type === "folder") {
            total += countFilesInFolder(item.children ?? []);
        }
    }

    return total;
}


console.log(countFilesInFolder([]));                                                                    // 0
console.log(countFilesInFolder([{ type: "file" }]));                                                    // 1
console.log(countFilesInFolder([
    { type: "file" },
    {
        type: "folder", children: [
            { type: "file" },
            { type: "folder", children: [{ type: "file" }, { type: "file" }] },
        ]
    },
    { type: "folder", children: [] },
]));                                                                                                    // 4