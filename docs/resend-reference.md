# Referência de integração Resend

Para o alerta automático de novos leads, o remetente deve usar um domínio próprio verificado no Resend. A conta configurada deve verificar `terapeutascristas.com` antes de enviar mensagens a partir de `adcursos@terapeutascristas.com`.

Fontes oficiais consultadas em 13 de agosto de 2026:

- [Domínios verificados no Resend](https://resend.com/docs/dashboard/domains/introduction)
- [Como criar um endereço de remetente no Resend](https://resend.com/docs/knowledge-base/how-do-I-create-an-email-address-or-sender-in-resend)
- [API de verificação de domínio](https://resend.com/docs/api-reference/domains/verify-domain)
- [API para listar domínios](https://resend.com/docs/api-reference/domains/list-domains), cuja resposta contém os campos `name`, `status` e `capabilities.sending` para cada domínio.

## Estado verificado

Em 13 de agosto de 2026, a consulta autenticada à lista de domínios retornou uma lista vazia. Assim, `terapeutascristas.com` ainda não está adicionado ao Resend e o remetente `adcursos@terapeutascristas.com` não pode enviar alertas até que a configuração de DNS e a verificação sejam concluídas no painel do serviço.

Após a propagação do DNS, uma nova consulta autenticada confirmou `terapeutascristas.com` com status `verified` e capacidade de envio `enabled`. O teste final pelo remetente `adcursos@terapeutascristas.com` foi aceito pela API do Resend em 13 de agosto de 2026, com o identificador `71be9152-6591-49dc-8ccb-b30807c70368`.

## Validação funcional concluída

A usuária confirmou que realizou um cadastro real de interesse em Psicanálise e Neurociência e recebeu o aviso **“Novo interesse: Psicanálise e Neurociência”** no e-mail de suporte. A validação comprova o fluxo completo: formulário, armazenamento do lead e alerta automático pelo remetente configurado.
