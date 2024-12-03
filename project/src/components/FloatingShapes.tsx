import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

export default function FloatingShapes() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const shapes = Array.from({ length: 6 }).map((_, i) => {
    const props = useSpring({
      from: { opacity: 0, transform: 'translate3d(0,100px,0) rotate(0deg)' },
      to: {
        opacity: isVisible ? 0.3 : 0,
        transform: isVisible 
          ? `translate3d(${Math.sin(i) * 100}px,${Math.cos(i) * 100}px,0) rotate(${i * 60}deg)`
          : 'translate3d(0,100px,0) rotate(0deg)',
      },
      config: { tension: 100, friction: 30 },
      delay: i * 200,
    });

    return (
      <animated.div
        key={i}
        style={props}
        className={`absolute w-32 h-32 border border-white/20 rounded-full
          ${i % 2 === 0 ? 'bg-gradient-to-br' : 'bg-gradient-to-tr'}
          from-white/5 to-white/10 backdrop-blur-3xl`}
      />
    );
  });

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {shapes}
    </div>
  );
}