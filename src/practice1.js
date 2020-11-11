const parseData = ({data, column}) => {
    let output = [];

    data.map(data => {
        let member = {};
        column.forEach(column => {
            member[column.name] = data.shift();
        });
        output.push(member);
    })
    return output;
}
export {parseData};
