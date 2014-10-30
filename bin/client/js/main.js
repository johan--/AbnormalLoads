require({
  shim: {
    'libs/angular': {
      deps: ['libs/jquery']
    },
    'libs/angular-resource': {
      deps: ['libs/angular']
    },
    'libs/angular-route': {
      deps: ['libs/angular']
    },
    'libs/select2': {
      deps: ['libs/angular']
    },
    'libs/moment-isoduration': {
      deps: ['libs/moment']
    },
    'libs/ui-bootstrap-tpls': {
      deps: ['libs/angular']
    },
    'libs/angular-file-upload': {
      deps: ['libs/angular', 'libs/angular-file-upload-html5-shim']
    },
    'libs/bootstrap': {
      deps: ['libs/jquery']
    },
    'libs/gi-ui': {
      deps: ['libs/angular', 'libs/angular-route', 'libs/angular-resource', 'libs/underscore', 'libs/select2', 'libs/bootstrap']
    },
    'libs/gi-util': {
      deps: ['libs/gi-ui']
    },
    'libs/gi-security': {
      deps: ['libs/gi-ui', 'libs/gi-util']
    },
    'app': {
      deps: ['libs/angular', 'libs/angular-resource', 'libs/angular-route', 'libs/angular-file-upload', 'libs/underscore', 'libs/moment', 'libs/bootstrap', 'libs/ui-bootstrap-tpls', 'libs/gi-util', 'libs/gi-ui', 'libs/gi-security']
    },
    'bootstrap': {
      deps: ['app']
    },
    'routes': {
      deps: ['app', 'controllers/main']
    },
    'views': {
      deps: ['app']
    },
    'controllers/main': {
      deps: ['app']
    },
    'controllers/list': {
      deps: ['app', 'services/tests']
    },
    'controllers/test': {
      deps: ['app', 'services/tests']
    },
    'controllers/customer': {
      deps: ['app', 'services/customers']
    },
    'services/customers': {
      deps: ['app']
    },
    'services/tests': {
      deps: ['app']
    }
  }
}, ['require', 'controllers/main', 'controllers/customer', 'controllers/list', 'controllers/test', 'views', 'routes'], function(require) {
  return require(['bootstrap']);
});
