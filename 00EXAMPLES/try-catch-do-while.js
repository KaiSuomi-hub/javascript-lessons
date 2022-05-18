const readUserFile = () => {
    try {
        const data = fs.readFileSync("user_data.json", "utf-8");
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
    }
};
