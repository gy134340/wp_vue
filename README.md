# wp
test webpack


1. If you want a module available as variable in every module, such as making $ and jQuery available in every module without writing require("jquery"). You should use ProvidePlugin (Official doc).





### install package

1.babel-core, babel-loader, babel-preset-latest(如果配置了preset)
2.html-webpack-plugin, // to use html template
 

source-map

1. eval, 每个模块加 eval,只有一行,console里出报错信息
2. source-map, 原始的，还有原来的行数


开发环境用 cheap-module-eval-source-map，
生产环境用 cheap-module-source-map