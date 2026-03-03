const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeStudentPortal(usn, pass) {
    console.log("Trying axios approach for", usn);
    // The student portal uses heavy JS, this might not work
    const response = await axios.get('https://parents.msrit.edu');
    const $ = cheerio.load(response.data);
    // Need to find the form fields
    return null;
}
module.exports = { scrapeStudentPortal };