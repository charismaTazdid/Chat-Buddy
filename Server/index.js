import express from "express"
import cors from "cors";
import axios from "axios";


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
    res.send("I am running");
});
//projectId: f393cb49-dc46-4632-9f5e-86c50ef915ec
// secret: 0bcb026c-778e-42f8-b27a-2cbf946d2345

app.post("/authenticate", async (req, res) => {
    const { userName } = req.body;
    try {
        const response = await axios.put("https://api.chatengine.io/users/",
            { username: userName, secret: userName, first_name: userName },
            { headers: { "private-key": "0bcb026c-778e-42f8-b27a-2cbf946d2345" } }
        )
        return res.status(response.status).json(response.data)
    } catch (err) {
        // console.log(err)
        return res.status(err.response.status).json(err.response.data)
    }

});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server Start"));