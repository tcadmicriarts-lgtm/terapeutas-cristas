# Verificação de deploy — Pós-Graduação

Em 14 de agosto de 2026, o commit `056e86b7` foi sincronizado com a branch `main` do GitHub. A primeira consulta ao domínio Vercel ainda indicava a referência anterior, pois o deploy automático estava em propagação.

Após a conclusão da atualização automática, o domínio [terapeutas-cristas.vercel.app](https://terapeutas-cristas.vercel.app/) passou a servir a arte correta em `/manus-storage/pos-graduacao-antiga_240a46cc.png`. A referência publicada foi conferida diretamente na página de Formações.

## Material gratuito pós-cadastro

Em 14 de agosto de 2026, o commit da integração do devocional foi sincronizado com a branch `main`. Na primeira verificação imediata do domínio Vercel, a página já estava ativa com o formulário, mas o arquivo JavaScript servido ainda não continha a referência ao PDF. A confirmação definitiva deve ocorrer após a conclusão do deploy automático associado ao push.

Após uma segunda consulta, o domínio Vercel continuava servindo o pacote anterior (`index-9_SM_mCq.js`), sem a referência ao PDF nem ao botão do devocional. O código já está na branch `main`; a verificação deve ser repetida depois da propagação do provedor de hospedagem.

Uma terceira conferência, após nova espera, confirmou que o mesmo pacote anterior continuava ativo no domínio Vercel. O PDF e a confirmação pós-cadastro permanecem disponíveis na versão publicada pelo projeto Manus, mas o deploy externo ainda precisa ser disparado ou concluído no painel Vercel.

O status do GitHub para o commit `7d35fcee` registrou um deployment Vercel concluído com sucesso, associado ao ambiente `Production` e à URL `https://terapeutas-cristas-3juywvd4l-formacao-terapeutas-cristas.vercel.app`. A abertura direta desse ambiente requisitou autenticação Vercel, enquanto o domínio público principal ainda entregava o pacote anterior. Para tornar essa revisão disponível no domínio público, é necessário conferir no painel Vercel a associação do domínio e, se necessário, promover o deployment mais recente para produção.
