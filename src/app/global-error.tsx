"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Something went wrong!</h1>
          <p>Please try refreshing the page.</p>
          <button onClick={() => reset()}>Retry</button>
        </div>
      </body>
    </html>
  );
}
