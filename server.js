const express = require('express')
const pinataSDK = require('@pinata/sdk');
const app = express()
const port = 3000
// LOAD DOT ENV

app.use(express.json());

app.get('/', async (req, res) => {

    // TEMP API KEY
    const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjZGY3MGJmMi05ZDEwLTQ5NjYtOGE5YS02NmQzZGZmYTY4NTYiLCJlbWFpbCI6ImRzYW5kb3ZhbC5haUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNWQ5N2JhODg5MWI1ZjcxYTQ5ZTIiLCJzY29wZWRLZXlTZWNyZXQiOiJlOTA0MjRiNzZhYTg2NDUxNTliZGUwODc1Yzg2OWE4MTQ5ZjBhZjk5MGE0MDAyYTQ4N2ViZmVjN2EzNzEyNzM2IiwiaWF0IjoxNzAxNjEzODM0fQ.q9MdTLOtccvxbpVNLrrwrreD0523cjst52t3EEgvM1U"
    const pinata = new pinataSDK({ pinataJWTKey: JWT });
    const res_ = await pinata.pinJSONToIPFS(req.body);
    // console.log(res);
    res.send(res_)
    return res_

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})