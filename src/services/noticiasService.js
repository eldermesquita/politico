

import Parser from 'rss-parser/dist/rss-parser.min.js';

export const feedNoticias = async () => {
  const parser = new Parser();
 // const URL_FEED = 'https://www.trt7.jus.br/index.php?option=com_content&view=category&id=152&Itemid=887&format=feed&type=rss';
  const URL_FEED = 'https://scon.stj.jus.br/SCON/PesquisaProntaFeed';

  // Como o acesso direto pode causar erro de CORS no navegador, usamos um proxy público.
  const PROXY_URL = 'https://api.allorigins.win/get?url=';

  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(URL_FEED)}`)
    console.log("🚀 ~ feedNoticias ~ response: ", response.body);

/*
    let contents = data.contents;

    // Se o AllOrigins retornou um URI data:base64 (ocorre quando o feed é detectado como binário ou compactado)
    if (contents?.startsWith('data:')) {
      const base64Index = contents.indexOf('base64,');
      if (base64Index !== -1) {
        const base64Content = contents.substring(base64Index + 7);
        // Decodificar base64 preservando caracteres especiais (UTF-8)
        const binaryString = atob(base64Content);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.codePointAt(i);
        }
        contents = new TextDecoder('utf-8').decode(bytes);
      }
    }

    console.log("🚀 ~ feedNoticias ~ feed: ", contents);*/
   // const feed = await parser.parseString(contents);


    /*return feed.items.slice(3, 6).map(item => {
      // Tentar extrair uma imagem da descrição se houver tags <img>
      // O feed do TRT7 costuma colocar a imagem no 'content' ou 'description'
      const content = item.content || item.description || '';
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      let imageUrl = imgMatch ? imgMatch[1] : null;

      if (imageUrl === 'https://www.trt7.jus.br/' || imageUrl === 'https://www.trt7.jus.br') {
        imageUrl = "src/assets/img/imagem-padrao.png";
      } else if (imageUrl) {
        imageUrl = imageUrl.replace(/(https:\/\/www\.trt7\.jus\.br)\/+/g, '$1/');
      }
      console.log("🚀 ~ imageUrl: ",  imageUrl);

      return {
        title: item.title,
        link: item.link,
        date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('pt-BR') : '',
        description: (item.contentSnippet || item.description || '').replaceAll(/<[^>]*>?/gm, '').substring(0, 150) + '...',
        image: imageUrl
      };
    });*/
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return [];
  }
};
