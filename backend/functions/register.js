const sendResponse = require("../utils/sendResponse");
const {
    PHOTOS_TABLE,
    ORIGINAL_BUCKET_NAME,
    THUMBNAIL_BUCKET_NAME,
    USER_POOL,
} = require("../const/paths");

const { s3, rekognition, dynamoDb } = require("../const/providers");
module.exports.register = async (event) => {
    try {
        console.log({ USER_POOL});
        const { email, password} = JSON.parse(event.body);
        
        console.log({email, password});
    } catch (error) {
        console.error(error);
        return sendResponse(400, error);
    }
};