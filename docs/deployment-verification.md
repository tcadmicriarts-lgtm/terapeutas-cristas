# Verificação de deploy — Pós-Graduação

Em 14 de agosto de 2026, o commit `056e86b7` foi sincronizado com a branch `main` do GitHub. A primeira consulta ao domínio Vercel ainda indicava a referência anterior, pois o deploy automático estava em propagação.

Após a conclusão da atualização automática, o domínio [terapeutas-cristas.vercel.app](https://terapeutas-cristas.vercel.app/) passou a servir a arte correta em `/manus-storage/pos-graduacao-antiga_240a46cc.png`. A referência publicada foi conferida diretamente na página de Formações.

## Material gratuito pós-cadastro

Em 14 de agosto de 2026, o commit da integração do devocional foi sincronizado com a branch `main`. Na primeira verificação imediata do domínio Vercel, a página já estava ativa com o formulário, mas o arquivo JavaScript servido ainda não continha a referência ao PDF. A confirmação definitiva deve ocorrer após a conclusão do deploy automático associado ao push.

Após uma segunda consulta, o domínio Vercel continuava servindo o pacote anterior (`index-9_SM_mCq.js`), sem a referência ao PDF nem ao botão do devocional. O código já está na branch `main`; a verificação deve ser repetida depois da propagação do provedor de hospedagem.

Uma terceira conferência, após nova espera, confirmou que o mesmo pacote anterior continuava ativo no domínio Vercel. O PDF e a confirmação pós-cadastro permanecem disponíveis na versão publicada pelo projeto Manus, mas o deploy externo ainda precisa ser disparado ou concluído no painel Vercel.

O status do GitHub para o commit `7d35fcee` registrou um deployment Vercel concluído com sucesso, associado ao ambiente `Production` e à URL `https://terapeutas-cristas-3juywvd4l-formacao-terapeutas-cristas.vercel.app`. A abertura direta desse ambiente requisitou autenticação Vercel, enquanto o domínio público principal ainda entregava o pacote anterior. Para tornar essa revisão disponível no domínio público, é necessário conferir no painel Vercel a associação do domínio e, se necessário, promover o deployment mais recente para produção.

## Correção do formulário

O commit `cb47644` recebeu status Vercel concluído com sucesso. No domínio público, o pacote mudou para `index-hv8ZkVaS.js`, confirmando que a nova compilação passou a ser entregue. A referência ao domínio Manus está presente no bundle publicado; a confirmação funcional do envio do formulário permanece como etapa final.

Uma chamada sem dados válidos, feita a partir do domínio Vercel, alcançou o backend Manus e recebeu resposta JSON. A rota solicitada retornou `404` de procedimento não encontrado, o que indica que o navegador já deixa de receber a página estática vazia do Vercel, mas que o caminho tRPC efetivo ainda deve ser conferido antes do teste de cadastro.

O procedimento correto é `leads.create`. Uma solicitação propositalmente inválida para essa rota, originada no domínio Vercel, retornou JSON `400` de validação — e não uma página estática ou resposta vazia. Isso confirma a conectividade do navegador ao endpoint correto; permanece pendente somente um cadastro real autorizado para conferir Supabase, e-mails e o botão do brinde.

O cadastro real autorizado foi iniciado no domínio Vercel com o identificador “Teste técnico Vercel”. Após a primeira janela de espera, o botão permaneceu no estado “Enviando…”, portanto a conclusão do processamento ainda precisa ser diagnosticada antes da confirmação final.

O processamento foi concluído em seguida com status HTTP `200`. A página Vercel exibiu a mensagem de interesse registrado e o botão “Baixar 5 Dias para Silenciar a Ansiedade e Ouvir a Voz de Deus”, apontando para o PDF seguro do projeto. Como o procedimento aguarda os envios Resend antes de responder, a resposta bem-sucedida também confirma a aceitação técnica dos disparos de alerta e boas-vindas; resta somente a confirmação de recebimento na caixa de e-mail.
