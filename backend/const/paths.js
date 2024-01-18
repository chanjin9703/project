module.exports = {
    ORIGINAL_BUCKET_NAME: process.env.ORIGINAL_BUCKET_NAME,
    USER_POOL: process.env.IS_OFFLINE
        ? "us-east-1_PcGqZCETK"
        : process.env.USER_POOL,
    USER_POOL_CLIENT: process.env.IS_OFFLINE
        ? "2oc4vs8fddhs1r16m3eqpqh0fe"
        : process.env.USER_POOL_CLIENT,
};