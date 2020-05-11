module.exports = [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
        options: {
            transpileOnly: true,
        }
    }
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
        },
      ],
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: {
              localIdentName: "[name]__[local]___[hash:base64:5]",
            },	
          }
        },
        {
          loader: 'less-loader'
        }
      ]
    }
];