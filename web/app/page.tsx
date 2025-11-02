import './globals.css';

function Label({ children }: { children: React.ReactNode }) {
  return <label className="label-sm block">{children}</label>;
}

function NumberInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type={props.type ?? 'number'}
      className={`input-base ${props.className ?? ''}`}
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`input-base resize-y min-h-10 max-h-40 ${props.className ?? ''}`}
    />
  );
}

function DesktopRow({ index }: { index: number }) {
  return (
    <div
      className="hidden md:grid grid-cols-[80px,1fr,110px,140px,110px,140px,48px] items-start gap-4 px-4 py-3"
    >
      <div>
        <Label>#</Label>
        <NumberInput defaultValue={index} disabled className="input-muted font-semibold" />
      </div>

      <div className="min-w-0">
        <Label>Descripci?n</Label>
        <TextArea
          placeholder="Ej: Mantenimiento de estructuras met?licas con pintura anticorrosiva"
          aria-label="Descripci?n"
          rows={2}
        />
      </div>

      <div>
        <Label>Cant.</Label>
        <NumberInput min={0} step={1} placeholder="0" />
      </div>

      <div>
        <Label>Precio Unit.</Label>
        <NumberInput min={0} step={0.01} placeholder="0.00" />
      </div>

      <div>
        <Label>Desc. %</Label>
        <NumberInput min={0} max={100} step={1} placeholder="0" />
      </div>

      <div>
        <Label>Subtotal</Label>
        <NumberInput defaultValue={0} disabled className="input-muted" />
      </div>

      <div className="flex items-end">
        <button aria-label="Eliminar" className="btn-ghost" type="button">?</button>
      </div>
    </div>
  );
}

function MobileRow({ index }: { index: number }) {
  return (
    <div className="md:hidden px-4 py-4">
      <div className="mb-2 text-[11px] font-semibold text-slate-500">L?NEA {index}</div>

      <div className="grid grid-cols-1 gap-3">
        <div>
          <Label>#</Label>
          <NumberInput defaultValue={index} disabled className="input-muted font-semibold" />
        </div>
        <div>
          <Label>Descripci?n</Label>
          <TextArea
            placeholder="Ej: Mantenimiento de estructuras met?licas con pintura anticorrosiva"
            aria-label="Descripci?n"
            rows={3}
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Label>Cant.</Label>
            <NumberInput min={0} step={1} placeholder="0" />
          </div>
          <div>
            <Label>Precio Unit.</Label>
            <NumberInput min={0} step={0.01} placeholder="0.00" />
          </div>
          <div>
            <Label>Desc. %</Label>
            <NumberInput min={0} max={100} step={1} placeholder="0" />
          </div>
        </div>
        <div>
          <Label>Subtotal</Label>
          <NumberInput defaultValue={0} disabled className="input-muted" />
        </div>
        <div className="flex justify-end">
          <button aria-label="Eliminar" className="btn-ghost" type="button">?</button>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-2xl font-semibold tracking-tight">?tems de la Factura</h1>
      <p className="mt-1 text-sm text-slate-600">
        Dise?o responsivo y profesional que evita solapamientos, tama?os exagerados y desbordes.
      </p>

      <section className="mt-5 card overflow-hidden">
        <div className="hidden md:grid grid-cols-[80px,1fr,110px,140px,110px,140px,48px] gap-4 border-b bg-slate-50 px-4 py-3 text-[12px] font-medium text-slate-600">
          <div>#</div>
          <div>Descripci?n</div>
          <div>Cant.</div>
          <div>Precio Unit.</div>
          <div>Desc. %</div>
          <div>Subtotal</div>
          <div></div>
        </div>

        <div className="divide-y">
          {[1, 2].map((i) => (
            <div key={i} className="contents">
              <DesktopRow index={i} />
              <MobileRow index={i} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <button type="button" className="btn-primary">Agregar l?nea</button>
          <div className="text-sm text-slate-600">
            Los campos mantienen tama?o adecuado y no bloquean otros elementos.
          </div>
        </div>
      </section>
    </main>
  );
}
