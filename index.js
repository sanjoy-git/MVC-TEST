const express = require("express");
const app=express();


const userRouter=require("./routes/users.route")


app.use(express.urlencoded({extended:true}));
app.use(userRouter);


// const users=[
//     {
//         name:"Sanjoy",
//         age:31,
//     },
//     {
//         name:"Golam",
//         age:32,
//     },
// ];


// const handleHtml =`
// <form method="POST" action="/users">
// <input type="text" name="name" placeholder="Enter Name" />
// <input type="number" name="age" placeholder="Enter age" />
// <button type="submit">save user</button>
// </form>
// `



// app.get("/users", (req, res) => {
//   res.send(handleHtml);
// });

// app.post("/users",(req,res)=>{
//     const name = req.body.name;
//     const age = Number(req.body.age);
//     const user = {
//       name,
//       age,
//     };
//     users.push(user);
//     res.status(201).json({
//       success: true,
//       users,
//     });
// })

app.use((req,res,next)=>{
    res.status(404).json({
        message:"resource not found",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${port} 🔥`);
});