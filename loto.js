const KNN = require('@artificialscience/k-nn');
const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const delay = require('delay');


const PORT = 3000;
 const app = express();
 global.res;
 app.use(bodyParser.json());

 app.use(cors());
app.post('/goal',function(req,res){

    class Main {
        constructor() {
            const knn = new KNN(3);
            const outputs = this.initialize();
            console.log('Initilizing the training...')
            let [accuracy, k] = knn.training(outputs, 100, outputs.length, 20, true);
            console.log(accuracy, k);
            console.log('traning is done.');
            
            console.log(req.body.name)
            var hello = req.body.name
            console.log("decode",decodeURIComponent(hello));
            var decode = decodeURIComponent(hello)
           console.log(decode.trim)
           var trim = decode.trim
           console.log(trim)
           var trimarr =[]
           trimarr.push(decode)


            const pre =[100,0.53,16];
            console.log(pre)
             let goal = knn.predict(outputs,pre);
             console.log('Accuracy about: ' + accuracy + ', was predicted the goal as: ' + goal);
             global.res = 'Accuracy about: ' + accuracy + ', was predicted the goal as: ' + goal;
        }
        initialize() {
            try {
                let data = ('' + fs.readFileSync('test.csv')).split('\n');
                let header = data.splice(0, 1);
                let features = [];
                for (let line of data) {
                    let rowFeature = line.split(';');
                    let feature = [];
                    for (let row of rowFeature) {
                        let value = parseFloat(row);
                        if (!isNaN(value)) {
                            feature.push(value);
                        } else {
                            console.log(line);
                        }
                    }
                    features.push(feature);
                }
                console.log(features)
                return features;
            } catch (ex) {
                console.error("me",ex);
            }
        }
    }
    new Main();

    res.json({
        message:global.res
      })

}

)

app.listen(PORT,function()
 {
     console.log("sunn raha hu ")
 }
)


