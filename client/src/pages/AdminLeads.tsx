import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { buildLeadsCsv } from "@/lib/leadsCsv";
import { ArrowLeft, Download, LockKeyhole, LogOut, Mail, RefreshCw, Users } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { useLocation } from "wouter";

type Lead = {
  id: string;
  nome: string;
  whatsapp: string;
  email: string;
  status?: string | null;
  origem?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  consentimento_em?: string | null;
  criado_em?: string | null;
};

function formatDate(value?: string | null) {
  if (!value) return "—";
  return new Date(value).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11
    ? `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    : value;
}

export default function AdminLeads() {
  const [, navigate] = useLocation();
  const [password, setPassword] = useState("");
  const [page, setPage] = useState(1);
  const access = trpc.admin.status.useQuery(undefined, { retry: false });
  const leads = trpc.admin.listLeads.useQuery({ page, pageSize: 50 }, {
    enabled: access.data?.authenticated === true,
    retry: false,
  });
  const exportLeads = trpc.admin.exportLeads.useQuery(undefined, { enabled: false, retry: false });
  const login = trpc.admin.login.useMutation({
    onSuccess: async () => {
      setPassword("");
      await access.refetch();
      await leads.refetch();
    },
  });
  const logout = trpc.admin.logout.useMutation({
    onSuccess: async () => {
      await access.refetch();
    },
  });

  const leadList = useMemo(() => (leads.data?.items ?? []) as Lead[], [leads.data]);

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login.mutate({ password });
  };

  const exportCsv = async () => {
    const { data } = await exportLeads.refetch();
    if (!data) return;
    const csv = buildLeadsCsv(data);
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `leads-terapeutas-cristas-${new Date().toISOString().slice(0, 10)}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const authenticated = access.data?.authenticated === true;

  return (
    <main className="min-h-screen bg-[#faf7fc] text-[#2f2442]">
      <header className="border-b border-[#6b1fa8]/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm font-semibold text-[#6b1fa8]">
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </button>
          <div className="text-right">
            <p className="font-serif text-xl font-bold text-[#6b1fa8]">Instituto TC</p>
            <p className="text-xs text-[#14ADA9]">Painel administrativo</p>
          </div>
        </div>
      </header>

      {!authenticated ? (
        <section className="mx-auto flex min-h-[calc(100vh-81px)] max-w-md items-center px-5 py-12">
          <form onSubmit={submitLogin} className="w-full rounded-3xl border border-[#6b1fa8]/10 bg-white p-7 shadow-xl shadow-[#6b1fa8]/10 sm:p-9">
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6b1fa8] text-white">
              <LockKeyhole className="h-6 w-6" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#6b1fa8]">Acesso aos leads</h1>
            <p className="mt-2 text-sm leading-6 text-[#665777]">Use a senha administrativa para consultar cadastros e exportar a lista em CSV.</p>
            <label className="mt-7 block text-sm font-semibold" htmlFor="admin-password">Senha</label>
            <Input id="admin-password" type="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} className="mt-2 h-12" required />
            {login.error ? <p className="mt-3 text-sm text-red-600">{login.error.message}</p> : null}
            <Button type="submit" className="mt-6 h-12 w-full bg-[#6b1fa8] hover:bg-[#541583]" disabled={login.isPending}>
              {login.isPending ? "Verificando…" : "Entrar no painel"}
            </Button>
          </form>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#14ADA9]">Relacionamento</p>
              <h1 className="mt-2 font-serif text-4xl font-bold text-[#6b1fa8]">Leads cadastrados</h1>
              <p className="mt-2 text-sm text-[#665777]">Página {page} · até 50 cadastros por visualização.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" onClick={() => leads.refetch()} disabled={leads.isFetching} className="border-[#6b1fa8]/20">
                <RefreshCw className="mr-2 h-4 w-4" /> Atualizar
              </Button>
              <Button onClick={exportCsv} disabled={exportLeads.isFetching} className="bg-[#14ADA9] hover:bg-[#0c8f8b]">
                <Download className="mr-2 h-4 w-4" /> {exportLeads.isFetching ? "Preparando…" : "Exportar todos em CSV"}
              </Button>
              <Button variant="ghost" onClick={() => logout.mutate()} disabled={logout.isPending} className="text-[#6b1fa8]">
                <LogOut className="mr-2 h-4 w-4" /> Sair
              </Button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-[#6b1fa8]/10 bg-white shadow-lg shadow-[#6b1fa8]/5">
            {leads.isLoading ? (
              <div className="p-10 text-center text-sm text-[#665777]">Carregando cadastros…</div>
            ) : leads.error ? (
              <div className="p-10 text-center text-sm text-red-600">{leads.error.message}</div>
            ) : leadList.length === 0 ? (
              <div className="flex flex-col items-center p-12 text-center text-[#665777]"><Users className="mb-3 h-8 w-8 text-[#14ADA9]" />Ainda não há leads cadastrados.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-[#f8f0ff] text-xs uppercase tracking-wide text-[#6b1fa8]">
                    <tr><th className="px-5 py-4">ID</th><th className="px-5 py-4">Pessoa</th><th className="px-5 py-4">WhatsApp</th><th className="px-5 py-4">Status</th><th className="px-5 py-4">Origem</th><th className="px-5 py-4">Campanha</th><th className="px-5 py-4">Consentimento</th><th className="px-5 py-4">Cadastro</th></tr>
                  </thead>
                  <tbody className="divide-y divide-[#6b1fa8]/10">
                    {leadList.map(lead => (
                      <tr key={lead.id} className="hover:bg-[#faf7fc]">
                        <td className="px-5 py-4 font-mono text-xs text-[#665777]" title={lead.id}>{lead.id.slice(0, 8)}…</td>
                        <td className="px-5 py-4"><p className="font-semibold">{lead.nome}</p><a href={`mailto:${lead.email}`} className="mt-1 inline-flex items-center gap-1 text-xs text-[#6b1fa8] hover:underline"><Mail className="h-3 w-3" />{lead.email}</a></td>
                        <td className="px-5 py-4 whitespace-nowrap">{formatPhone(lead.whatsapp)}</td>
                        <td className="px-5 py-4"><span className="rounded-full bg-[#14ADA9]/10 px-2.5 py-1 text-xs font-semibold text-[#0c7774]">{lead.status ?? "novo"}</span></td>
                        <td className="px-5 py-4 text-[#665777]"><p>{lead.utm_source ?? lead.origem ?? "direto"}</p><p className="mt-1 text-xs">{lead.utm_medium ?? "sem mídia"}</p></td>
                        <td className="px-5 py-4 text-[#665777]"><p>{lead.utm_campaign ?? "sem campanha"}</p><p className="mt-1 text-xs">{[lead.utm_term, lead.utm_content].filter(Boolean).join(" · ") || "sem termo/conteúdo"}</p></td>
                        <td className="px-5 py-4 whitespace-nowrap text-[#665777]">{formatDate(lead.consentimento_em)}</td>
                        <td className="px-5 py-4 whitespace-nowrap text-[#665777]">{formatDate(lead.criado_em)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          {leads.data ? (
            <div className="mt-5 flex items-center justify-end gap-3">
              <Button variant="outline" onClick={() => setPage(current => Math.max(1, current - 1))} disabled={page === 1 || leads.isFetching}>Anterior</Button>
              <Button variant="outline" onClick={() => setPage(current => current + 1)} disabled={!leads.data.hasNextPage || leads.isFetching}>Próxima</Button>
            </div>
          ) : null}
          {exportLeads.error ? <p className="mt-4 text-sm text-red-600">{exportLeads.error.message}</p> : null}
        </section>
      )}
    </main>
  );
}
