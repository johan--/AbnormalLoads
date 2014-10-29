#!/bin/sh
forever stop {{app_name}}.js
forever start {{app_name}}.js