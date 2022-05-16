const anotherFunction = (time, next) => {
    setTimeout(next, time);
};

anotherFunction(1000, () => {
    console.log("three");
    anotherFunction(1000, () => {
        console.log("two");
        anotherFunction(1000, () => {
            console.log("one");
            anotherFunction(1000, () => {
                console.log("go");
            });
        });
    });
});
