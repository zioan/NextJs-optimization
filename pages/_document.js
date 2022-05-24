//allows to customize the entire HTML document
//outside React
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <div id='overlays'>{/* <h1>Hello</h1> */}</div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
    // return (
    //   // default configuration if is not overwrited
    //   <Html>
    //     <Head />
    //     <body>
    //       <Main />
    //       <NextScript />
    //     </body>
    //   </Html>
    // );
  }
}

export default MyDocument;
