module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    protocol: 'https',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'connect'
    ]);
};