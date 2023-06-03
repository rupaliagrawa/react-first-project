const path = require('path');
const  webpack  = require('webpack');


module.exports = {
    mode:'development',


    entry:'./index.js',
    output: {
        path:path.resolve(__dirname, 'build'),
        filename:'bundel.js',
        publicPath:'build'
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/(node_module|bower_component)/,
                loader:'babel-loader',
                options:{ presets:['@babel/preset-react']},
            
              
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React":"react",
        })
    ]
    

}