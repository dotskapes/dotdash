module.exports = {
    reporter: function (results) {
        var len = results.length;
        var str = "";
 
        results.forEach(function (result) {
            var file = result.file;
            var error = result.error;
 
            if (error.reason === "Unexpected space before '('.") {
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