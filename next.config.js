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
        ignoreDuringBuilds: false,
    },
    webpack: (config) => {
        config.externals = [...config.externals, { '@prisma/client': '@prisma/client' }];
        return config;
    },
}

module.exports = nextConfig 