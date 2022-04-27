const inventory = [
    {type : "machine", value: 5000},

    {type: "machine", value: 650},

    {type: "duck", value: 10},

    {type: "funiture", value: 1200},

    {type: "machine", value: 77}
]


let sum = (arr) => {
    let totalMachineValue = 0
    for (let item of arr) {
        totalMachineValue += item.value
    }

    return totalMachineValue;
}


