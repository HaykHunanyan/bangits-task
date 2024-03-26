const uuidsHex = [
    "550e8400-e29b-41d4-a716-446655440000",
    "123e4567-e89b-12d3-a456-426655440000",
    "abcdef12-3456-7890-bcde-f01234567890"
];

function hexToBinary(uuidHex) {
    const hexWithoutDashes = uuidHex.replace(/-/g, '');
    const binaryArray = new Uint8Array(16);

    for (let i = 0; i < 16; i++) {
        binaryArray[i] = parseInt(hexWithoutDashes.substr(i * 2, 2), 16);
    }

    return binaryArray;
}

const uuidsBinary = uuidsHex.reduce((acc, hex) => {
    acc.push(hexToBinary(hex));
    return acc;
}, []);

console.log(uuidsBinary);
