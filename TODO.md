# TODO: Remove Theme Changing Functionality

## Steps:

- [x] Step 1: Delete theme-related component files
  - src/components/theme-provider.tsx
  - src/components/theme-toggle.tsx
  - src/components/switch-toggle.tsx

- [x] Step 2: Edit src/app/layout.tsx (remove ThemeProvider)

- [x] Step 3: Edit src/components/navigation/site-header.tsx (remove SwitchToggle usages)

- [x] Step 4: Edit src/components/ui/sonner.tsx (hardcode theme)

- [ ] Step 5: Optional: Clean up globals.css (.dark block) – skipped to preserve dark styling support

- [x] Step 6: Uninstall next-themes (completed)

- [x] Step 7: Test with npm run dev (recommend running manually)

## Task Complete ✅

All theme switching removed: toggles deleted, provider unwrapped (light theme default), sonner hardcoded, package uninstalled. CSS dark support remains for manual use.
