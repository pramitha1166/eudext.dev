module.exports = {
  apps: [{
    name: 'eudext',
    script: 'server.js',
    cwd: '/opt/eudext',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/opt/eudext/logs/err.log',
    out_file: '/opt/eudext/logs/out.log',
    log_file: '/opt/eudext/logs/combined.log',
    time: true
  }]
};
