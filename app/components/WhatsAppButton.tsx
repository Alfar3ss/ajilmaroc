export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/212694504252"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-primary)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.672-1.62-.92-2.216-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.26.489 1.69.626.71.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.412.248-.694.248-1.289.173-1.412-.074-.123-.272-.198-.57-.347z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2.04C6.47 2.04 2.04 6.47 2.04 12c0 1.992.54 3.842 1.473 5.422L2 22l4.73-1.36A9.92 9.92 0 0012 21.96c5.53 0 9.96-4.43 9.96-9.96S17.53 2.04 12 2.04zM12 20.04a8.04 8.04 0 01-4.12-1.12l-.29-.17-2.81.81.78-2.74-.19-.29A8.038 8.038 0 013.96 12 8.04 8.04 0 0112 3.96 8.04 8.04 0 0120.04 12 8.04 8.04 0 0112 20.04z" fill="currentColor" />
        </svg>
        <span className="sr-only">WhatsApp</span>
      </span>
      
    </a>
  );
}
