/** @type {import('next').NextConfig} */
const nextConfig = {
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
    distDir: '.next',
}

module.exports = nextConfig
