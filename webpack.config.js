// {
//   module: {
//     rules: [
//       // ... other rules omitted
//       {
//         test: /\.css$/,
//         use: [
//           'vue-style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               // enable CSS Modules
//               modules: true,
//               // customize generated class names
//               localIdentName: '[local]_[hash:base64:8]'
//             }
//           }
//         ]
//       }
//     ]
//   }
// }

module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
          test: /\.s[a|c]ss$/,
          loader: 'style!css!sass'
      }
    ]
  },
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  }