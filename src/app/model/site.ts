export class Site {
	id: string;
	infos: {
		titulo: string;
		sobre: string;
		email: string;
		candidato: string;
		telefone: string;
		endereco: string;
		logo_site: string;
	};
	redes_social: {
		facebook: string;
		twitter: string;
		instagram: string;
		whatsapp: string;
		youtube: string;
		capa_facebook: string;
		capa_twitter: string;
		capa_instagram: string;
		capa_youtube: string;
	};
	layout: { principal: string; secundaria: string; cor_texto: string; cor_versu: string };
	biografia: {
		biografia: string;
		imagem_biografia: string;
		texto_pagina: string;
	};
	atuacao: { emendas: string; projetos: string; comissoes: string; noticias: string };
	podcasts: { spotify: string; itunes: string; soundclound: string; deezer: string };
}
