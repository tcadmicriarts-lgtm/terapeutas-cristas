# Estratégia recomendada para a próxima etapa de leads

## Recomendação principal

O site já possui o núcleo que mais importa: formulário, registro seguro, painel, CSV, atribuição de campanhas, alerta para atendimento e confirmação para a interessada. A próxima etapa com melhor retorno é transformar esse interesse em relacionamento: **material gratuito útil + consentimento explícito + mensagem oficial de WhatsApp**. Isso deve preceder qualquer painel mais complexo.

> A regra prática é simples: primeiro captar com clareza, depois nutrir com valor e, por último, analisar e otimizar as campanhas.

| Prioridade | Recurso | Por que vale a pena agora | Decisão recomendada |
|---|---|---|---|
| 1 | Material de captação | Aumenta o valor percebido do formulário e dá um motivo concreto para deixar contato | Implementar após receber o PDF/material aprovado pela equipe |
| 2 | Consentimento e WhatsApp oficial | Permite uma recepção rápida e humana no canal que a audiência mais usa | Preparar agora; ativar quando a conta oficial e o modelo de mensagem estiverem aprovados |
| 3 | Filtros de período, origem e campanha | Mostra qual ação de marketing traz mais contatos ao longo do tempo | Implementar quando começarem as campanhas recorrentes ou houver mais de uma campanha ativa |
| 4 | Busca por nome/e-mail/WhatsApp | Facilita encontrar uma pessoa específica para atendimento | Útil, mas pode aguardar até a base ter dezenas de leads |

## WhatsApp: caminho seguro e oficial

A resposta automática no WhatsApp é viável, mas não deve ser conectada por uma conta pessoal nem por automações de navegador. A estratégia adequada é usar uma conta empresarial oficial, exigir autorização clara no formulário e enviar um modelo de mensagem aprovado quando a empresa iniciar a conversa. A Meta exige que a pessoa autorize claramente o recebimento de comunicações da empresa e oferece modelos e webhooks para a operação oficial.[^1][^2][^3]

O formulário deverá incluir uma opção desmarcada, por exemplo: **“Autorizo receber no WhatsApp informações sobre aulas gratuitas, materiais e formações do Instituto TC. Posso cancelar a qualquer momento.”** A escolha, a data e a versão desse texto devem ser salvas com o lead. Isso protege a operação e torna o contato esperado pela interessada.

Para ativar essa etapa, será preciso decidir entre usar a **WhatsApp Cloud API da Meta** diretamente ou um provedor oficial de WhatsApp Business. Em ambos os casos, a equipe precisará ter uma conta empresarial, um número comercial, uma conta do WhatsApp Business, credenciais seguras e um modelo de mensagem aprovado. A integração ainda não foi criada porque não há conexão oficial de WhatsApp configurada no projeto.

## Material gratuito como isca de captação

Um PDF pode funcionar muito bem, desde que seja realmente útil e coerente com a formação. As opções mais fortes para este público são um **guia prático de acolhimento cristão**, um **checklist para identificar caminhos de cuidado emocional à luz da fé** ou uma **aula introdutória gratuita**. A recomendação é entregar o material imediatamente na página de confirmação e repeti-lo no e-mail de boas-vindas; depois, o WhatsApp pode lembrar a pessoa da aula gratuita ou do grupo.

Não recomendo criar ou prometer um material sem que a equipe aprove o conteúdo, o título e os direitos de uso. Quando o PDF estiver pronto, ele deve ser enviado ao armazenamento seguro do projeto e referenciado por um link estável.

## O que significam os filtros do painel

Os filtros não são obrigatórios agora, mas serão valiosos quando houver campanhas simultâneas. Um filtro de período responde “quantos leads chegaram nesta semana?”; um filtro de origem responde “Instagram, Google ou indicação trouxe mais contatos?”; e um filtro de campanha responde “qual anúncio ou lançamento gerou mais inscrições?”. Como as UTMs já estão sendo salvas, esses filtros poderão ser construídos sem alterar a lógica de captação.

### Fontes

[^1]: [Meta for Developers — Get opt-in for WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in)
[^2]: [Meta for Developers — Marketing templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates)
[^3]: [Meta for Developers — WhatsApp webhooks overview](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview)
