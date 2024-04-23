import fs from 'fs';

for (let i = 2; i < process.argv.length; i++) {
    const file = process.argv[i];
    if (file.includes('.txt')) {
        sortFile(file);
    }
}

function sortFile(name) {
    const lines = fs
        .readFileSync(name, 'utf-8').split('\n')
        .map(item => item.trim())
        .filter(Boolean);

    const words = [...new Set(lines)];
    words.sort((a, b) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();

        return aLower > bLower ? 1 : aLower == bLower ? 0 : -1;
    });

    fs.writeFileSync(name, words.join('\n') + '\n');
}
