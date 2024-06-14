// export function extractBodyContent(htmlString) {
//   if (!htmlString) {
//     console.error("HTML string is empty or null");
//     return null;
//   }

//   // Use regular expressions to extract content between <body> and </body>
//   const bodyRegex = /<body[^>]*>[\s\S]*<\/body>/i;
//   const match = htmlString.match(bodyRegex);

//   if (match) {
//     return match[0]; // Return the matched content
//   } else {
//     console.error("No <body> tag found in the HTML string");
//     return null;
//   }
// }
