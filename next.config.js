module.exports = {
    eslint: {
        // Allow production builds to succeed even with ESLint errors/warnings
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};
