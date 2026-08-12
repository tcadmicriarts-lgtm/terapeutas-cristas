# Verificação de publicação no Vercel

Data da verificação: 12 de agosto de 2026.

- O domínio `https://terapeutas-cristas.vercel.app/` está servindo o título **“Terapeutas Cristãs — Formação com Fé”**.
- A meta descrição publicada não contém a palavra “MEC”.
- O domínio está exibindo a página atualizada, incluindo a comunicação de capacitação profissional.
- A prévia antiga mostrada no aplicativo de mensagens é compatível com cache local de metadados/links.
- Após o commit de metadados Open Graph, o domínio ainda servia a versão anterior: título e descrição já atualizados, porém sem as novas metatags Open Graph. Isso indica que o deploy mais recente do GitHub ainda não havia sido publicado pelo Vercel no momento da verificação.
- Após o commit `9892647`, a rota `/formacao` retornou 404 no domínio Vercel, confirmando que o Vercel ainda não publicou esse commit mais recente.
- Após a propagação do deploy, `https://terapeutas-cristas.vercel.app/formacao?v=20260812` foi servido e redirecionou ao site principal, confirmando que a nova rota foi publicada pelo Vercel.
