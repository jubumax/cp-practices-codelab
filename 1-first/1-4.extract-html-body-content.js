/*
 * `Extract HTML Body Content`
 * 
 * Lucas is porting his old HTML website to a new ReactJS format. 
 * He needs to extract only the content within the <body> and </body> tags from various HTML files, 
 * as the rest will be automatically generated.
 * 
 * Your task is to write a function that takes an HTML string and returns only the content found between the opening <body> tag and 
 * the closing </body> tag. Everything else, including the tags themselves, should be ignored.
 * 
 * Assume the HTML is well-formed and the <body> and </body> tags will always be present. 
 * The body tags will appear on their own lines, potentially with leading whitespace for indentation, but with no other content on those lines.
 */
 

/* // NOT actually correct because of 'whitespace, newline, indentation' exactly

function extractBodyContent(htmlString) {

const lines = htmlString.split("\n");

const startIndex =  lines.findIndex(line => line.trim() === "<body>")
const endIndex =  lines.findIndex(line => line.trim() === "</body>")

const bodyLines = lines.slice(startIndex+1, endIndex)

return bodyLines.join("\n")

} */


// Corrected

function extractBodyContent(htmlString) {
  const openTag = "<body>"
  const closeTag = "</body>"

  const startIndex = htmlString.indexOf(openTag) + openTag.length;
  const endIndex = htmlString.indexOf(closeTag);

  return htmlString.slice(startIndex, endIndex)

}


const html = `<html>
<head>
  <title>Test</title>
</head>
<body>
  <h1>Hello</h1>
  <p>World</p>
</body>
</html>`

console.log(extractBodyContent(html));

/* 
  <h1>Hello</h1>
  <p>World</p>
*/