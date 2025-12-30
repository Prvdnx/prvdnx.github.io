import { useEffect, useRef } from "react";

export const BackgroundImage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;

      // Create radial gradient that follows mouse
      const gradient = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 400
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.12)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.04)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed bg-neutral-950 box-border caret-transparent h-screen w-screen z-[-1] overflow-hidden left-0 top-0">
      <img
        src="https://c.animaapp.com/mjpjrohfuFGl1x/assets/image-1.png"
        className="absolute aspect-[auto_1280_/_1000] box-border caret-transparent h-full max-w-full w-full"
        style={{ mixBlendMode: "lighten" }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: "screen" }}
      />
    </div>
  );
};
