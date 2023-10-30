const cache = {
    refreshTokenExpiration: 604800000,
    refreshToken: (userId: string) => `${userId}-refresh-token`
};

export default cache;
