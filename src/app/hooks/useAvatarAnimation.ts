import { useEffect } from "react";
import { gsap } from "gsap";

export function useAvatarAnimation(avatarRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const avatarElement = avatarRef.current;
    if (!avatarElement) return;

    if (avatarElement) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = avatarElement.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((e.clientY - rect.top - centerY) / centerY) * -30;
        const rotateY = ((e.clientX - rect.left - centerX) / centerX) * 30;

        gsap.to(avatarElement, {
          rotationX: rotateX,
          rotationY: rotateY,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      const resetRotation = () => {
        gsap.to(avatarElement, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      avatarElement.addEventListener("mousemove", handleMouseMove);
      avatarElement.addEventListener("mouseleave", resetRotation);

      return () => {
        avatarElement.removeEventListener("mousemove", handleMouseMove);
        avatarElement.removeEventListener("mouseleave", resetRotation);
      };
    }
  }, [avatarRef]);
}
