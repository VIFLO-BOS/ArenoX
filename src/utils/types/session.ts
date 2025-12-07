export interface RightMenuClientProps {
  // The auth library returns a session-like object; keep this flexible
  // to avoid tight coupling to the adapter's exact shape.
  session: Record<string, unknown> | null;
}
