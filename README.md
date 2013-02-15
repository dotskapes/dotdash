see wiki:
https://github.com/dotskapes/dash/wiki/Dash


Dash is short for dashboard.
This shows several visuals for geographic data: wiggle map, time series, MDS & a table.


To set up as developer you will need to use npm to retrieve package dependencies 
like wiggle maps.

npm instructions

To use npm, you'll need to install node (http://nodejs.org/). On a mac you'll also need the xcode command line tools if you don't have it already.

Once npm is installed, run npm install in dash to download the dependencies.

To use a local version of wigglemaps:


sass:
gem install sass
sass --watch css/style.scss:css/built/style.css