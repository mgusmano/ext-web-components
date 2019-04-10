let seed = 1.3;

// Controllable random.
function random() {
    seed *= 7.3;
    seed -= Math.floor(seed);
    return seed;
}

export default function createData(numRecords) {
    let data = [],
        record = {
            id: 0,
            g0: 300,
            g1: 700 * random() + 100,
            g2: 700 * random() + 100,
            g3: 700 * random() + 100,
            g4: 700 * random() + 100,
            g5: 700 * random() + 100,
            g6: 700 * random() + 100,
            name: 'Item-0'
        },
        i;

    data.push(record);

    for (i = 1; i < numRecords; i++) {
        record = {
            id: i,
            g0: record.g0 + 30 * random(),
            g1: Math.abs(record.g1 + 300 * random() - 140),
            g2: Math.abs(record.g2 + 300 * random() - 140),
            g3: Math.abs(record.g3 + 300 * random() - 140),
            g4: Math.abs(record.g4 + 300 * random() - 140),
            g5: Math.abs(record.g5 + 300 * random() - 140),
            g6: Math.abs(record.g6 + 300 * random() - 140),
            name: 'Item-' + i
        };
        data.push(record);
    }

    return data;
}