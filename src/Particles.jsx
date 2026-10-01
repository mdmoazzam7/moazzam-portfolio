import { useEffect, useRef } from "react";

function Particles() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -1000, y: -1000 };
    const LINK = 130;
    let w, h, dots = [], raf;

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(110, Math.floor((w * h) / 16000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        if (!reduce) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < 0 || d.x > w) d.vx *= -1;
          if (d.y < 0 || d.y > h) d.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(136, 146, 176, 0.7)";
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            ctx.strokeStyle = `rgba(136, 146, 176, ${(1 - dist / LINK) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
        const mx = dots[i].x - mouse.x;
        const my = dots[i].y - mouse.y;
        const md = Math.hypot(mx, my);
        if (md < 160) {
          ctx.strokeStyle = `rgba(100, 255, 218, ${(1 - md / 160) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => {
      init();
      if (reduce) draw();
    };

    init();
    draw();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}

export default Particles;