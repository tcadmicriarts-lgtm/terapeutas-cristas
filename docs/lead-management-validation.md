# Validação das melhorias de gestão de leads

Em 13 de agosto de 2026, a prévia local confirmou que a página principal preserva a identidade visual e que a rota `/admin` abre em uma tela de senha, sem exibir dados de leads antes da autenticação.

O fluxo de leads foi ampliado com a captura de `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` e `utm_content`. Esses dados são persistidos na tabela `leads_psicanalise`, exibidos de forma resumida no painel e incluídos integralmente no arquivo CSV.

O painel consulta os leads em páginas de até 50 registros para visualização e possui uma exportação separada, protegida por sessão, que busca todos os lotes disponíveis antes de gerar o CSV.

Após reiniciar o ambiente em 13 de agosto de 2026, o registro do servidor não voltou a apresentar o erro anterior relacionado à exportação de `sendWelcomeEmail`. A prévia com UTMs na URL renderizou normalmente e a rota `/admin` exibiu apenas o formulário de senha, sem expor qualquer dado de lead antes da autenticação.
