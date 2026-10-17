const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

if (finePointer && cursorDot && cursorRing) {
  const hoverableSelector = 'a, button, .service-card, .video-card, .post-card';
  let isHovering = false;

  cursorDot.style.opacity = '0';
  cursorRing.style.opacity = '0';
  cursorRing.style.transition = 'transform 350ms ease, border-color 350ms ease, opacity 150ms ease';

  window.addEventListener('pointermove', (event) => {
    const position = { left: `${event.clientX}px`, top: `${event.clientY}px` };
    Object.assign(cursorDot.style, position, {
      opacity: '1',
      transform: 'translate(-50%, -50%)',
    });
    Object.assign(cursorRing.style, position, {
      opacity: '1',
      transform: `translate(-50%, -50%) scale(${isHovering ? 2.3 : 1})`,
    });
  }, { passive: true });

  const updateHoverState = (target) => {
    const nextHovering = target instanceof Element && Boolean(target.closest(hoverableSelector));
    if (nextHovering === isHovering) return;

    isHovering = nextHovering;
    cursorRing.style.transform = `translate(-50%, -50%) scale(${isHovering ? 2.3 : 1})`;
    cursorRing.style.borderColor = isHovering ? 'rgba(28, 88, 227, .85)' : 'rgba(255, 255, 255, .35)';
  };

  document.addEventListener('pointerover', (event) => updateHoverState(event.target));
  document.addEventListener('pointerout', (event) => updateHoverState(event.relatedTarget));
  document.addEventListener('pointerleave', () => {
    cursorDot.style.opacity = '0';
    cursorRing.style.opacity = '0';
    updateHoverState(null);
  });
}
