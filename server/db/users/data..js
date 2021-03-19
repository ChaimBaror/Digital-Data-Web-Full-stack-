const fs = require('fs');
const data = require('../../data.json');


let usersdb = [];
const tempData = () => {
    usersdb = [{"id":"000","name":"testfirst", "email": "test@gamil.com","age": "18"}]
    console.log("this databaess JSON is work");
    let myData={...data}
    for (let key in myData) {
            usersdb.push(
            data[key]
        );
    }
    const arr = getUniqueListBy(usersdb, 'id')
    return arr;
}
function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}


   const addtojson= (user) => {
       usersdb.push(user)
       console.log("this add to json woek");
        const dataflie = usersdb
        const jsonString = JSON.stringify(dataflie)
        fs.writeFile('data.json', jsonString, err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    }


module.exports = {
    addtojson,
    tempData
};




