import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="assest/images/favicon.png" sizes="32x32" />
          <title>
            Builders in Bangalore | Real Estate Developers in South India
          </title>

          <link
            href="assest/css/style01.css"
            rel="stylesheet"
            type="text/css"
            id="theme-opt"
          />
          <link
            href="https://www.prestigeconstructions.com/css/colors/theme.css"
            rel="stylesheet"
            id="color-opt"
          />

          <link
            href="assest/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
            integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="assest/js/jquery.min.js"></script>

          <script src="assest/js/bootstrap.bundle.min.js"></script>
          <script src="assest/js/my.min.js"></script>

          <script src="assest/js/utils.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
