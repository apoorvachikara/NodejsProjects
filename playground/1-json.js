// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan holiday'
// }

// const bookJSON = JSON.stringify(book);

// console.log(JSON.parse(bookJSON));
const fs = require('fs');

const data = fs.readFile('./1-json.json', (err, data)=> {
        let fileData;
        if(err)
            throw err;
    
        fileData = JSON.parse(data);
        fileData.name = 'Apoorva Chikara';
        fileData.age = 27
        fs.writeFile('./1-json.json', JSON.stringify(fileData), (err)=>{
            if(err)
                throw err;
            console.log("File updated");
        })        
        return data;  
});



