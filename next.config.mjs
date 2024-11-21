/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          protocol: 'https',
          hostname: 'api-mojosadean.rodiginesia.com',
          port: '',
          pathname: '/product/**'
        }]
      },
};

export default nextConfig;
