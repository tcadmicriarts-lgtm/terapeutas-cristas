# Validação das melhorias de gestão de leads

Em 13 de agosto de 2026, a prévia local confirmou que a página principal preserva a identidade visual e que a rota `/admin` abre em uma tela de senha, sem exibir dados de leads antes da autenticação.

O fluxo de leads foi ampliado com a captura de `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` e `utm_content`. Esses dados são persistidos na tabela `leads_psicanalise`, exibidos de forma resumida no painel e incluídos integralmente no arquivo CSV.

O painel consulta os leads em páginas de até 50 registros para visualização e possui uma exportação separada, protegida por sessão, que busca todos os lotes disponíveis antes de gerar o CSV.

Após reiniciar o ambiente em 13 de agosto de 2026, o registro do servidor não voltou a apresentar o erro anterior relacionado à exportação de `sendWelcomeEmail`. A prévia com UTMs na URL renderizou normalmente e a rota `/admin` exibiu apenas o formulário de senha, sem expor qualquer dado de lead antes da autenticação.

## Validação real de UTMs

Em 13 de agosto de 2026, foi submetido um cadastro de teste autorizado pela URL abaixo:

```text
https://teracristas-fsnv789j.manus.space/?utm_source=instagram&utm_medium=paid_social&utm_campaign=psicanalise_agosto&utm_term=mulheres_cristas&utm_content=validacao_utm#formacoes
```

O painel exibiu para o novo lead a origem `instagram`, a mídia `paid_social`, a campanha `psicanalise_agosto`, o termo `mulheres_cristas` e o conteúdo `validacao_utm`. A exportação CSV recém-gerada também foi verificada e incluiu as colunas `UTM Source`, `UTM Medium`, `UTM Campaign`, `UTM Term` e `UTM Content` com esses valores.
