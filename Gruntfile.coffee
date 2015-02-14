module.exports = (grunt) ->
  grunt.initConfig
    clean:
      reset:
        src: ['bin']
      temp:
        src: ['temp']

    template:
      dev:
        dest: 'bin/client/index.html'
        src: 'client/index.template'
        environment: 'dev'
      uat:
        dest: 'temp/client/index.html'
        src: '<%= template.dev.src %>'
        environment: 'uat'
      prod:
        dest: 'temp/client/index.html'
        src: '<%= template.dev.src %>'
        environment: 'prod'
      test:
        dest: '<%= template.prod.dest %>'
        src: '<%= template.dev.src %>'
        environment: 'test'

    #minifies html file
    minify:
      prod:
        files:
          'bin/client/index.html': 'temp/client/index.html'

    # optimizes files managed by RequireJS
    requirejs:
      scripts:
        options:
          baseUrl: 'temp/client/js/'
          findNestedDependencies: true
          logLevel: 0
          mainConfigFile: 'temp/client/js/main.js'
          name: 'main'
          onBuildWrite: (moduleName, path, contents) ->
            modulesToExclude = ['main']
            shouldExcludeModule = modulesToExclude.indexOf(moduleName) >= 0

            if (shouldExcludeModule)
              return ''

            return contents
          optimize: 'uglify'
          out: 'bin/client/js/scripts.min.js'
          preserveLicenseComments: false
          skipModuleInsertion: true
          uglify:
            no_mangle: false
      styles:
        options:
          baseUrl: './temp/client/css/'
          cssIn: './temp/client/css/styles.css'
          logLevel: 0
          optimizeCss: 'standard'
          out: 'bin/client/css/styles.min.css'

    express:
      server:
        options:
          port: 8152
          server: 'bin/server/app.coffee'
          hostname: '*'
      testServer:
        options:
          port: 8133
          server: 'bin/server/app.coffee'
          hostname: '*'
      devServer:
        options:
          port: 8152
          server: 'bin/server/app.coffee'
          hostname: '*'

    coffeeLint:
      scripts:
        files: [
          {
            expand: true
            src: ['client/**/*.coffee', '!client/js/components/**']
          }
          {
            expand: true
            src: ['server/**/*.coffee']
          }
        ]
        options:
          indentation:
            value: 2
            level: 'error'
          no_plusplus:
            level: 'error'
      tests:
        files: [
          {
            expand: true
            src: ['test/**/*.coffee']
          }
        ]
        options:
          indentation:
            value: 2
            level: 'error'
          no_plusplus:
            level: 'error'

    less:
      styles:
        dest: 'temp/client/css/styles.css'
        src: 'client/less/styles.less'

    copy:
      img:
        expand: true
        cwd: 'client/'
        src: ['img/*']
        dest: 'bin/client'
      fonts:
        expand: true
        cwd: 'bower_components/bootstrap/'
        src: ['fonts/*']
        dest: 'bin/client'
      libs:
        expand: true
        src: 'client/js/libs/*'
        dest: 'temp'
      charts:
        flatten: true
        expand: true
        cwd: 'client/js/amCharts'
        src: [
          'charts.export.js'
          'canvg.js'
          'rgbcolor.js'
          'amcharts.js'
        ]
        dest: 'temp/client/js/libs'
      client:
          expand: true
          cwd: 'client/js'
          src: ['**/*.js']
          dest: 'temp/client/js'
      server:
          expand: true
          cwd: 'server/'
          src: ['**']
          dest: 'bin/server'
      components:
        flatten: true
        expand: true
        cwd: 'bower_components'
        src: [
          'gi-*/bin/gi-*.js'
          'angular/angular.js'
          'angular-resource/angular-resource.js'
          'angular-route/angular-route.js'
          'angular-bootstrap/ui-bootstrap-tpls.js'
          'select2/select2.js'
          'momentjs/moment.js'
          'requirejs/require.js'
          'underscore/underscore.js'
          'json2/json2.js'
          'requirejs-domready/domReady.js'
          'html5shiv/dist/html5shiv-printshiv.js'
          'jquery/dist/jquery.js'
          'ng-file-upload/angular-file-upload.js'
          'ng-file-upload/angular-file-upload-html5-shim.js'
          'aws-sdk/dist/aws-sdk.js'
        ]
        dest: 'temp/client/js/libs'
      scripts:
        expand: true
        cwd: 'temp/client/js/'
        src: ['**']
        dest: 'bin/client/js'
      index:
        expand: true
        cwd: 'temp/client/'
        dest: 'bin/client/'
        src: 'index.html'
      styles:
        expand: true
        cwd: 'temp/client/css/'
        src: ['styles.css']
        dest: 'bin/client/css'
      env:
        expand: true
        cwd: 'conf/'
        src: [
          '.env'
        ]
        dest: 'bin'
      conf:
        expand: true
        cwd: 'conf/'
        src: [
          'restart.sh'
        ]
        dest: 'bin'
        options:
          mode: true

    ngTemplateCache:
      views:
        files:
          './temp/client/js/views.js': './client/views/*.html'
        options:
          trim: './client'
          module: 'abnormalloads'

    compress:
      scripts:
        options:
          mode: 'gzip'
        expand: true
        cwd: 'bin/client/'
        ext: 'min.js'
        src: ['js/*.min.js']
        dest: 'bin/client_gzip/'
      html:
        options:
          mode: 'gzip'
        expand: true
        cwd: 'bin/client/'
        ext: '.html'
        src: ['*.html']
        dest: 'bin/client_gzip/'
      css:
        options:
          mode: 'gzip'
        expand: true
        cwd: 'bin/client/'
        ext: '.min.css'
        src: ['css/*.min.css']
        dest: 'bin/client_gzip/'

    concat:
      bootstrap:
        src: [
          'bower_components/bootstrap/js/transition.js'
          'bower_components/bootstrap/js/collapse.js'
          'bower_components/bootstrap/js/dropdown.js'
          'bower_components/bootstrap/js/modal.js'
        ]
        dest: 'temp/client/js/libs/bootstrap.js'

    watch:
      dev:
        files: ['client/**/*']
        tasks: ['reloadDev']
        options:
          livereload: true
      prod:
        files: ['client/**/*']
        tasks: ['prod']
      feature:
        files: ['client/**/*', 'test/e2e/**/*']
        tasks: ['testFeature']

    cucumberjs:
      e2e:
        src: 'test/e2e'
        options:
          format: "pretty"
          coffee: true
    env:
      test:
        MONGO_NAME: "abnormalloads_test"

    karma:
      unit:
        configFile: "test/unit/client/karma.conf.coffee"
        singleRun: true
        browsers: ["Chrome"]

  grunt.loadNpmTasks 'grunt-contrib-less'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-requirejs'
  grunt.loadNpmTasks 'grunt-contrib-compress'
  grunt.loadNpmTasks 'grunt-gint'
  grunt.loadNpmTasks 'grunt-express'
  grunt.loadNpmTasks 'grunt-env'

  grunt.registerTask 'build', [
    'clean'
    'coffeeLint'
    'copy:client'
    'less'
    'ngTemplateCache'
    'copy:server'
    'concat:bootstrap'
    'copy:components'
    'copy:charts'
    'copy:img'
    'copy:fonts'
    'copy:libs'
    'copy:env'
  ]

  grunt.registerTask 'reloadDev', [
    'buildDev'
  ]

  grunt.registerTask 'buildDev', [
    'build'
    'template:dev'
    'copy:scripts'
    'copy:styles'
  ]

  grunt.registerTask 'dev', [
    'buildDev'
    'express:devServer'
    'watch:dev'
  ]

  grunt.registerTask 'prod', [
    'buildProd'
    'express:server'
    'express-keepalive'
  ]


  grunt.registerTask 'buildUat', [
    'build'
    'template:uat'
    'requirejs'
    'minify'
    'copy:conf'
    'clean:temp'
  ]

  grunt.registerTask 'buildProd', [
    'build'
    'template:prod'
    'requirejs'
    'minify'
    'compress'
    'copy:conf'
    'clean:temp'
  ]

  grunt.registerTask 'buildTest', [
    'build'
    'template:test'
    'requirejs'
    'minify'
    'compress'
    'clean:temp'
  ]
