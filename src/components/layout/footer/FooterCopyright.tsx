export function FooterCopyright() {
  return (
    <div className="mt-12 border-t border-white/10 pt-8">
      <p className="text-sm text-blue-100">
        © {new Date().getFullYear()} seaside.ai. All rights reserved.
      </p>
    </div>
  );
}