# GovFlow acceptance and security test plan

1. Visit `/api/health`; verify service status.
2. Configure `DATABASE_URL`, run SQL schema, verify `/api/records` returns seeded rows.
3. Verify unauthenticated POST/PATCH returns HTTP 401.
4. Sign in with configured administrator password, create a valid record, refresh, and verify durability.
5. Submit malformed data and confirm HTTP 400, no database write.
6. Update status to an allowed workflow state; confirm refresh persists it.
7. Export records while authenticated; confirm CSV escaping and access restrictions.
8. Verify session cookies are HttpOnly and SameSite=Lax.
9. Confirm mobile widths and keyboard-accessible controls.
10. For real organizational deployment, implement individual user accounts, audit and permission review, observability, backups and a privacy policy.
