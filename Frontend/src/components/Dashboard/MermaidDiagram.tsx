import mermaid from "mermaid";
import { useEffect, useRef } from "react";

export default function MermaidDiagram({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ theme: "dark" });

    const renderDiagram = async () => {
      if (!ref.current) return;

      const id = "mermaid-" + Math.random().toString(36).substr(2, 9);

      try {
        const { svg } = await mermaid.render(id, code);
        ref.current.innerHTML = svg;
      } catch (err) {
        console.error("Mermaid render error:", err);
      }
    };

    renderDiagram();
  }, [code]);

  return <div ref={ref} className="p-4 w-full h-3/4 md:h-[75dvh] "/>;
}