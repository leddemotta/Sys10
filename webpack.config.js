module.exports = {
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: {
                'primary-color': '#ff0000',
                'link-color': '#ff0000',
                'border-radius-base': '2px',
                'hack': `true; @import "your-less-file-path.less";`, // Override with less file
                },
                javascriptEnabled: true,
                },
            },
          ],
        },
      ],
    },
  };