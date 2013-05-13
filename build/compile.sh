./build/closurebuilder.py --root=src --namespace=Dashboard --output_mode=compiled --compiler_jar=build/compiler.jar -f --output_wrapper="(function() {'use strict'; %output%})();" > built/dash.js
