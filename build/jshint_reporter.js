module.exports = {
    reporter: function (results) {
        var len = results.length;
        var str = "";

        results.forEach(function (result) {
            var file = result.file;
            var error = result.error;

            if (error.reason === "Missing space after 'function'.") {
                len = len - 1;
                return;
            }

            // Don't require camel case for template names - they match file names.
            if (error.reason.match("Identifier '.*_template' is not in camel case")) {
                len = len - 1;
                return;
            }

            str += file  + ': line ' + error.line + ', col ' +
                error.character + ', ' + error.reason + '\n';
        });
 
        if (str) {
            process.stdout.write(str + "\n" + len + ' error' + ((len === 1) ? '' : 's') + "\n");
            process.exit(1);
        } else {
            process.exit(0);
        }
    }
};
