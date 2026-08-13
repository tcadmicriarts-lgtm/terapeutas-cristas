# Guia de operação dos leads

## Conferindo a origem das campanhas

Entre no painel em [https://teracristas-fsnv789j.manus.space/admin](https://teracristas-fsnv789j.manus.space/admin) e use a senha administrativa. A tabela apresenta uma visão resumida por lead: **Origem** mostra a fonte da visita e **Campanha** mostra a campanha, além dos campos complementares quando existirem. Para analisar ou filtrar em uma planilha, clique em **Exportar todos em CSV** e abra o arquivo no Excel.

Para que uma campanha seja identificada, use links com UTMs. Por exemplo:

```text
https://teracristas-fsnv789j.manus.space/?utm_source=instagram&utm_medium=paid_social&utm_campaign=psicanalise_agosto&utm_content=reel_01
```

| Parâmetro | Uso recomendado | Exemplo |
|---|---|---|
| `utm_source` | Canal de origem | `instagram` |
| `utm_medium` | Tipo de tráfego ou mídia | `paid_social` |
| `utm_campaign` | Nome da campanha | `psicanalise_agosto` |
| `utm_term` | Segmento, público ou palavra-chave | `mulheres_cristas` |
| `utm_content` | Variação do criativo | `reel_01` |

Os cinco parâmetros são capturados no momento em que a pessoa envia o formulário. Assim, uma ausência de UTM significa que o acesso não usou um link de campanha; nesse caso, a origem aparece como `site`.

> Para uma conferência rápida, abra o link com UTMs em uma janela anônima, envie o formulário com um e-mail de teste e clique em **Atualizar** no painel. O novo lead deverá mostrar a fonte e a campanha; no CSV estarão disponíveis também `utm_term` e `utm_content`.

## Trocando a senha do painel

A senha é guardada exclusivamente como segredo de ambiente no campo `ADMIN_ACCESS_PASSWORD`; ela não deve ser inserida no código, enviada por e-mail ou publicada no GitHub. Para mudar a senha, solicite a alteração do segredo de acesso do painel. Será aberta uma entrada segura para definir a nova senha, sem expor o valor na conversa.

Depois da atualização, use **Sair** no painel e entre novamente com a nova senha. Por segurança, escolha uma senha longa e exclusiva, de preferência com pelo menos 16 caracteres e uma combinação de palavras, números e símbolos. As sessões administrativas existentes podem permanecer válidas por até oito horas; sair do painel encerra a sessão no navegador utilizado.
