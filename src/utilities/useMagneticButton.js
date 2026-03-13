import {useRef, useEffect} from 'react';

export const useMagneticButton = (strength = 0.64, fling = 2.4) => {
    const btnRef = useRef(null);

    useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;

        const handleMouseMove = (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2; // calculate cursor position on the x axis relative to button center
            const y = e.clientY - rect.top - rect.height / 2; // calculate cursor position on the y axis relative to button center
            // btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`; // 0.35 = subtle pull effect

            // 0.6 above = moderate to extreme pull effect, 0.1 to 0.5 = small to subtle pull effect, adjust this as you see fit
            btn.style.transition = "transform 0.08s ease-out";
            btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };

        const handleMouseLeave = (e) => {
            // btn.style.transform = "translate(0, 0)"; // use this snap button back to its original position immediately

            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Phase 1: fling the button hard in the cursor exit direction
            btn.style.transition = "transform 0.07s ease-in";
            btn.style.transform = `translate(${x * fling}px, ${y * fling}px)`;

            // Phase 2: elastic bounce back
            setTimeout(() => {
                btn.style.transition = "transform 0.7s cubic-bezier(0.15, 2.0, 0.4, 1)";
                btn.style.transform = "translate(0, 0)";
            }, 70);
        };

        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            btn.removeEventListener("mousemove", handleMouseMove);
            btn.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength, fling]);
    
    return btnRef;
}