export const buildHTML = (content: string): string => {
  return `
    <html>
      <head></head>
      <body>
        <script type="text/javascript">window._sharedData = ${content};</script>
      </body>
    </html>
  `;
};
