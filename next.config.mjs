/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shopdiy-bucket-new.s3.amazonaws.com',
                port: '',
                pathname: '/**',
              }
        ]
    }
};

export default nextConfig;
