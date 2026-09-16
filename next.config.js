/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next generates AGENTS.md/CLAUDE.md on dev startup; agent instructions for
  // this project live outside the repo.
  agentRules: false,
}

module.exports = nextConfig
