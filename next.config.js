/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      { source: "/warehouse-management", destination: "/wms-for-ecommerce", permanent: false },
      { source: "/route-optimization", destination: "/wms-for-couriers", permanent: false },
      { source: "/inventory-control", destination: "/wms-for-retail", permanent: false },
      { source: "/fleet-management", destination: "/wms-for-couriers", permanent: false },
      { source: "/driver-mobile-app", destination: "/wms-for-couriers", permanent: false },
      { source: "/ai-forecasting", destination: "/resources", permanent: false },
    ];
  },
};

module.exports = nextConfig;
