const environment = {
    appPort: "UNIOWN_APP_PORT",
    throttleTotal: "UNIOWN_THROTTLE_TTL",
    throttleLimit: "UNIOWN_THROTTLE_LIMIT",
    redisTTL: "UNIOWN_REDIS_TTL",
    redisConnectionString: "UNIOWN_REDIS_CONNECTION_STRING",
    mongoConnectionString: "UNIOWN_MONGO_CONNECTION_STRING",
    mongoDatabaseName: "UNIOWN_MONGO_DATABASE_NAME",
    mongoConnectionUserName: "MONGO_INITDB_ROOT_USERNAME",
    mongoConnectionPassword: "MONGO_INITDB_ROOT_PASSWORD",
    jwtAccessSecret: "UNIOWN_JWT_ACCESS_SECRET",
    jwtRefreshSecret: "UNIOWN_JWT_REFRESH_SECRET"
};

export default environment;
