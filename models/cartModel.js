const { deepStrictEqual } = require("assert");
const { V4MAPPED } = require("dns");
const { symlink } = require("fs");
const { join } = require("path");
const { getDefaultHighWaterMark, setDefaultHighWaterMark } = require("stream");
const { setFlagsFromString } = require("v8");

const mongoose = reqauire('mongoose');
const cartSchemma = new mongoose.schema({
    product_id:{



        
    }
})