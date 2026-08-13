# Verificação visual do domínio Vercel

Em 13 de agosto de 2026, a página inicial em `https://terapeutas-cristas.vercel.app/` carregou o conteúdo textual e o formulário, mas a inspeção visual indicou que a imagem da logo e a imagem principal não foram exibidas. A correção deverá substituir ou ajustar as referências de ativos para que funcionem também fora do ambiente Manus.

Após o envio da correção ao GitHub, uma nova consulta ao mesmo endereço ainda apresentou os caminhos antigos de imagens no HTML e a ausência visual dos ativos. Isso indica que a implantação automática do Vercel ainda não havia sido propagada naquele instante; é necessário consultar novamente após o término do deploy.

Na verificação posterior, a nova implantação foi identificada e carregou as referências atualizadas via `https://teracristas-fsnv789j.manus.space/manus-storage/`. A captura visual confirmou a exibição da logo oficial e da imagem principal da turma no domínio Vercel.

Também foi validada a rota de compartilhamento `https://terapeutas-cristas.vercel.app/formacao`. Ela retorna o título, a descrição e as tags Open Graph e Twitter com a redação de capacitação profissional, sem a terminologia proibida. A imagem social aponta para a logo oficial do Instituto TC por meio do armazenamento público do projeto.
