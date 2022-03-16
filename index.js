
const tesseract = require("node-tesseract-ocr")

const images = ["./image1.png", "./image2.png", "./image3.png"]

async function main () {
    for (const image of images) {
        const text = await tesseract.recognize(image)
        // use regext to check if the text matches the pattern
        const isMatch = /elon musk/ig.test(text)
        console.log(`The text "${text}" contains "elon musk" ? ${isMatch}`)
    }
}
main()