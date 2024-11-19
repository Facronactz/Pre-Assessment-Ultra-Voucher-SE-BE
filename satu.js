function groupAnagrams(array) {
    const anagrams = {};

    for (let i = 0; i < array.length; i++) {
        const word = array[i];
        const count = new Array(26).fill(0);

        for (let j = 0; j < word.length; j++) {
            const index = word.charCodeAt(j) - 'a'.charCodeAt(0);
            count[index]++;
        }

        const key = count.join('#');

        if (!anagrams[key]) {
            anagrams[key] = [];
        }

        anagrams[key].push(word);
    }

    const result = [];
    for (const key in anagrams) {
        result.push(anagrams[key]);
    }

    return result;
}

// Contoh penggunaan
const array = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const groupedAnagrams = groupAnagrams(array);
console.log(groupedAnagrams);
