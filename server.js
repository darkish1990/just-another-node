const express = require("express")
const app = express()



app.use(express.json());

app.get("/", (req, res) => {
    res.send("helloWorld")
}
)


app.listen(process.env.PORT || 4000)