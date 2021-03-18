const fs = require('fs');
const data = require('../../data.json');
// export interface users {
//     id:String,
//     name:String,
//     email:String,
//     age:String
// }
const tempData = () => {
    const myData = data
    let usersdb = [];
    for (let key in data) {
        usersdb.push(
            data[key]
        );
        console.log(usersdb);
    }
    return usersdb;
}


   const addtojson= (user) => {
       console.log("this not woek");
        const dataflie = { user, ...data }
        console.log("dataflie" + dataflie);
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




