export function getRandomFromObject(obj: { [key: string]: any }) {
    const hiraganaKeys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * hiraganaKeys.length);
    const randomKey = hiraganaKeys[randomIndex];
    const randomValue = obj[randomKey];
    return {
        key: randomKey,
        value: randomValue,
    };
}

