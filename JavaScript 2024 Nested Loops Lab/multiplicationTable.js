function multiplicationTable(input) {
    for (let n1 = 1; n1 <= 10; n1++) {
        for (let n2 = 1; n2 <= 10; n2++) {
            let res = n1 * n2;
            console.log(`${n1} * ${n2} = ${res}`);
        }
    }
}
multiplicationTable([]);