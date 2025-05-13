/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    reactStrictMode: true,
    images: {
        domains: [],
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config) => {
        config.externals = [...config.externals, { '@prisma/client': '@prisma/client' }];
        return config;
    },
}

module.exports = nextConfig
