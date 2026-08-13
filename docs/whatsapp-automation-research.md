# Requisitos para automação de WhatsApp

Uma mensagem automática para novos leads deve usar a conta empresarial oficial do WhatsApp e somente pode ser enviada a pessoas que forneceram autorização clara para receber comunicações da empresa. A autorização deve identificar a empresa e o tipo de mensagem que será enviado. Para conversas iniciadas pela empresa, a mensagem geralmente precisa utilizar um modelo aprovado no painel do WhatsApp Business.

O WhatsApp Business Platform oferece webhooks para informar eventos como mensagens recebidas e o status de mensagens enviadas. Neste projeto, o disparo pode ocorrer diretamente após o envio do formulário; o webhook será necessário apenas se for desejado acompanhar entregas, leituras ou respostas no painel.

## Fontes oficiais

1. [Meta for Developers — Get opt-in for WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in)
2. [Meta for Developers — Marketing templates](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates)
3. [Meta for Developers — WhatsApp webhooks overview](https://developers.facebook.com/documentation/business-messaging/whatsapp/webhooks/overview)
