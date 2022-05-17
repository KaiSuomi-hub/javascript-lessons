const getValue = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ value: Math.random() });
        }, Math.random() * 1500);
    });
};

// promises
let valueOneHere;
let valueTwoHere;

getValue()
    .then((ret) => {
        valueOneHere = ret.value;
        return getValue();
    }).then((ret) => {
        valueTwoHere = ret.value;
        console.log(`Value 1 is ${valueOneHere} and value 2 is ${valueTwoHere}`);
    });

// promise.all + async/await

const func = async function() {
    const ret = await Promise.all([getValue(), getValue()]);
    console.log(`Value 1 is ${ret[0].value} and value 2 is ${ret[1].value}`);
}
func();

// async/await
const func2 = async function() {
    const valueOne = await getValue();
    const valueTwo = await getValue();
    console.log(`Value 1 is ${valueOne.value} and value 2 is ${valueTwo.value}`);
}

func2();