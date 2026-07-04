import { site } from '@/lib/site';

type AdSlotProps = {
  /** The AdSense ad unit slot ID. */
  slot?: string;
  format?: string;
  className?: string;
  label?: string;
};

/**
 * Renders a Google AdSense ad unit when a publisher ID is configured in
 * `src/lib/site.ts`. Until then it shows a clearly-marked placeholder so you
 * can see where ads will appear during development.
 *
 * The AdSense loader script is added once in the root layout.
 */
export default function AdSlot({
  slot,
  format = 'auto',
  className = '',
  label = 'Advertisement',
}: AdSlotProps) {
  const configured = Boolean(site.adsensePublisherId);

  return (
    <aside
      className={`not-prose my-8 w-full ${className}`}
      aria-label={label}
      role="complementary"
    >
      <p className="mb-1 text-center text-[10px] uppercase tracking-widest text-ink-muted/70">
        {label}
      </p>
      {configured ? (
        <ins
          className="adsbygoogle block"
          style={{ display: 'block' }}
          data-ad-client={site.adsensePublisherId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      ) : (
        <div className="flex min-h-[100px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400">
          Ad slot — add your AdSense publisher ID in src/lib/site.ts
        </div>
      )}
    </aside>
  );
}
