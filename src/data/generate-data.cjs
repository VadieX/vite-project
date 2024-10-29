const fs = require('fs');

const count = Number(process.argv[2]);
let names = [];
let birthdates = [];
let eyes = [];

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.split("\n").map(s => s.trim()).filter(n => n.length != 0));
            }
        });
    });
};

Promise.all([
    readFile('./names.txt'),
    readFile('./birthdates.txt'),
    readFile('./eyes.txt')
]).then(([namesData, birthdatesData, eyesData]) => {
    names = namesData;
    birthdates = birthdatesData;
    eyes = eyesData;

    let content = "export const data = [\n";
    for(let i = 0; i < count; i++){
        let name = names[~~(Math.random() * names.length)];
        let birth = birthdates[~~(Math.random() * birthdates.length)];
        let eyeColor = eyes[~~(Math.random() * eyes.length)];

        content += `  {\n    id: ${i + 1},\n    name: "${name}",\n    birth: "${birth}",\n    eyes: "${eyeColor}"\n  },\n`;
    }
    content += "];";

    fs.writeFile('/src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
    });
}).catch(err => {
    console.error("module-data.js error", err);
});
