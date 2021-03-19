const fs = require('fs');
const data = require('../../data.json');


let usersdb = [];

const tempData = () => {
    console.log("this databaess JSON is work");
    for (let key in data) {
        usersdb.push(
            data[key]
        );
    }
    return usersdb;
}


   const addtojson= (user) => {
       usersdb.push(user)
       console.log("this add to json woek");
        const dataflie = usersdb
        console.log("dataflie " + dataflie);
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




