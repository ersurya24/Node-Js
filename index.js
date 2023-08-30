// 13
// const fs = require('fs');

// const input = process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else
// {
//     console.log("invalid input ")
// }
// node index.js other red.txt 'this is color'



// 14
// const fs= require('fs');
// const path=require('path');
// const dirPath= path.join(__dirname,'files');
// console.log(dirPath)
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"some simple text in file")

// }
// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.warn("file name is : ",item)
//     });
// }
// )


// 15
// const fs= require('fs');
// const path=require('path');
// const dirPath= path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'This is a simple file');
// fs.readFile(filePath,'utf8',(err,item)=>{
//       console.log(item);
// })
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//      if(!err) {console.log('file is updated')}
// });
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//             if(!err) {console.log('file is updated')}
//       });
// fs.unlinkSync(`${dirPath}/fruit.txt`)

// 16



// let a= 10;
// let b = 0;

// let waitingData= new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//             resolve(30)
//       },2000)
// })

// waitingData.then((data)=>{
//       b=data;
//       console.log(a+b)
// })

const express = require ('express')
const app = express();
const port = 3000;
app.get('',(req,res)=>{
      res.send(`
      <input type="text" placeholder = "Enter name" /><a href = "/about" >go to about page</a>
      <button>Click Me</button>
      `)
      res.send('Welcome ' + req.query.name)
})
app.get('/about',(req,res)=>{
      res.send(`
      <input type="text" placeholder = "Enter name" value = "${req.query.name}"/>
      <button>Click Me</button>
      <a href = "/">go to home page</a>


      `)
      res.send('this is about page')
})
app.get('/help',(req,res)=>{
      res.send('this is help page')
})

app.listen(port,()=>{
      console.log(`server is running on port ${port}` )
})









