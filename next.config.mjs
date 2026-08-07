/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old HubSpot site -> new Next.js site (launch redirect map)
      { source: '/what-we-do', destination: '/how-we-work', permanent: true },
      { source: '/land-in-the-uk-with-velocity', destination: '/uk-expansion', permanent: true },
      { source: '/velocity-for-investors', destination: '/', permanent: true },
      { source: '/solutions', destination: '/growth', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/for-founders', destination: '/growth', permanent: true },
      { source: '/velocity-for-neds-and-board-advisors', destination: '/', permanent: true },
      { source: '/clean-tech', destination: '/our-work', permanent: true },
      { source: '/meet-velocity-b', destination: '/contact', permanent: true },
      { source: '/series-b-marketing-playbook', destination: '/resources', permanent: true },
      { source: '/meet-alex-us-expansion', destination: '/meet-alex', permanent: true },
      { source: '/meetings/simonson', destination: '/meet-alex', permanent: true },
      { source: '/meetings/ian-truscott', destination: '/meet-ian', permanent: true },
      { source: '/meetings/ian-truscott/iod-mentoring-slots', destination: '/meet-ian', permanent: true },
    ];
  },
};

export default nextConfig;
