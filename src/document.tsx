import { Meta, Title, Links, Main, Scripts } from 'ice';

export default function Document() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="ice.js 3 lite scaffold" />
        <link rel="icon" href="/ice-admin/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>ice 后台</title>
        <Meta />
        <Title />
        <Links />
      </head>
      <body>
        <Main />
        <Scripts />
      </body>
    </html>
  );
}
