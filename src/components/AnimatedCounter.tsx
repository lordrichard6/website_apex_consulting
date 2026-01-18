'use client';
import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

export default function AnimatedCounter({
    end,
    duration = 2000,
    suffix = '',
    prefix = ''
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const startTime = Date.now();
                    const startValue = 0;

                    const animate = () => {
                        const now = Date.now();
                        const progress = Math.min((now - startTime) / duration, 1);

                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [end, duration, hasAnimated]);

    return (
        <span ref={counterRef}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}
