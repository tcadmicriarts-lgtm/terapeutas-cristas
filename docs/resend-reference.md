# Referência de integração Resend

Para o alerta automático de novos leads, o remetente deve usar um domínio próprio verificado no Resend. A conta configurada deve verificar `terapeutascristas.com` antes de enviar mensagens a partir de `adcursos@terapeutascristas.com`.

Fontes oficiais consultadas em 13 de agosto de 2026:

- [Domínios verificados no Resend](https://resend.com/docs/dashboard/domains/introduction)
- [Como criar um endereço de remetente no Resend](https://resend.com/docs/knowledge-base/how-do-I-create-an-email-address-or-sender-in-resend)
- [API de verificação de domínio](https://resend.com/docs/api-reference/domains/verify-domain)
- [API para listar domínios](https://resend.com/docs/api-reference/domains/list-domains), cuja resposta contém os campos `name`, `status` e `capabilities.sending` para cada domínio.
