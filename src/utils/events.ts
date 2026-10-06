// ============================================================
// Lightweight intent events — let CTA buttons anywhere on the
// page pre-fill the registration form and scroll to it.
// ============================================================

export const REGISTER_EVENT = "ldta:register";

export type ProgramId = "enrichment" | "leadership";

export interface RegisterIntent {
  program?: ProgramId;
  sessionId?: string;
}

export function emitRegisterIntent(detail: RegisterIntent) {
  window.dispatchEvent(new CustomEvent<RegisterIntent>(REGISTER_EVENT, { detail }));
}
