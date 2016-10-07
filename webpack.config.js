/**
 * Created by jeaber on 7/29/15.
 */
/*
 config for webpack. Will be used in
 the Gulpfile for building our app.
 Does not need gulp in order to do so,
 but we use gulp to orchestrate
 */

var webpack = require('webpack');

module.exports = {
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devtool: 'sourcemap',

    module: {
        loaders: [
            {test: require.resolve("./src/app/app"), loader: "imports?$=jQuery,ParallaxjsPlugin,Fancybox"},
            {test: /\.html$/, loader: 'html'},
            {test: /\.styl$/, loader: 'style!css!stylus'},
            {test: /\.css/, loader: 'style!css'},
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]
            },
            {
                test: /\.js$/,
                loader: 'babel?stage=1',
                exclude: [/src\/lib/, /node_modules/, /\.spec\.js/]
            }
        ]
    },

    stylus: {
        use: [require('jeet')(), require('rupture')()]
    },
    resolve: {
        alias: {
            'jQuery': 'jquery',
            //'loadup': './src/app/componets/loadup',
            'TweenMax': 'gsap/src/minified/TweenMax.min',
            'GSAPjquery': 'gsap/src/minified/jquery.gsap.min',
            'TimelineMax': 'gsap/src/minified/TimelineMax.min',
            'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min',
            'SMgsapPlugin': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min',
            'SMjquery': 'scrollmagic/scrollmagic/minified/plugins/jquery.ScrollMagic.min',
            'TweenLite': 'gsap/src/minified/TweenLite.min',
            'ParallaxjsPlugin': 'parallax.js-1.3.1/parallax.min',
            'Fancybox': 'fancybox/dist/js/jquery.fancybox.pack',
            'picker': 'pickadate/lib/picker',
            'pickerDate': 'pickadate/lib/picker.date'
        }
    }
};
