import React from 'react';
import { info } from '../constants/contents';
import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    element => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );
const updateCardTransforms = useCallback(() => {
  if (!cardsRef.current.length) return;

  const { scrollTop, containerHeight } = getScrollData();
  const stackPositionPx = parsePercentage(stackPosition, containerHeight);
  const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

  const endElement = useWindowScroll
    ? document.querySelector('.scroll-stack-end')
    : scrollerRef.current?.querySelector('.scroll-stack-end');

  const endElementTop = endElement ? getElementOffset(endElement) : 0;

  const transformsCache = lastTransformsRef.current;

  cardsRef.current.forEach((card, i) => {
    if (!card) return;

    const cardTop = getElementOffset(card);
    const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
    const triggerEnd = cardTop - scaleEndPositionPx;
    const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
    const pinEnd = endElementTop - containerHeight / 2;

    const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
    const targetScale = baseScale + i * itemScale;
    const scale = 1 - scaleProgress * (1 - targetScale);
    const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

    let blur = 0;
    if (blurAmount) {
      const topIndex = cardsRef.current.findIndex((c, j) => {
        const jTop = getElementOffset(c);
        const jStart = jTop - stackPositionPx - itemStackDistance * j;
        return scrollTop < jStart;
      });
      const topCardIndex = topIndex === -1 ? cardsRef.current.length - 1 : Math.max(0, topIndex - 1);
      if (i < topCardIndex) blur = (topCardIndex - i) * blurAmount;
    }

    let translateY = 0;
    const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

    if (isPinned) {
      translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
    } else if (scrollTop > pinEnd) {
      translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
    }

    // Smooth interpolation between frames
    const last = transformsCache.get(i) || { translateY, scale, rotation, blur };
    const lerp = (a, b, t) => a + (b - a) * t;

    const smooth = {
      translateY: lerp(last.translateY, translateY, 0.15),
      scale: lerp(last.scale, scale, 0.15),
      rotation: lerp(last.rotation, rotation, 0.15),
      blur: lerp(last.blur, blur, 0.15),
    };

    card.style.transform = `translate3d(0, ${smooth.translateY}px, 0) scale(${smooth.scale}) rotate(${smooth.rotation}deg)`;
    card.style.filter = smooth.blur > 0 ? `blur(${smooth.blur}px)` : '';

    transformsCache.set(i, smooth);
  });
}, [
  itemScale,
  itemStackDistance,
  stackPosition,
  scaleEndPosition,
  baseScale,
  rotationAmount,
  blurAmount,
  useWindowScroll,
  calculateProgress,
  parsePercentage,
  getScrollData,
  getElementOffset,
]);
const handleScroll = useCallback(() => {
  if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
  animationFrameRef.current = requestAnimationFrame(updateCardTransforms);
}, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientationHandler: true,
        normalizeWheel: true,
        wheelMultiplier: 1,
        touchInertiaMultiplier: 35,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
        touchInertia: 0.6
      });

      lenis.on('scroll', handleScroll);

      const raf = time => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;
      return lenis;
    }
  }, [handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    setupLenis();

    updateCardTransforms();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        {/* Reduced spacer to fix blank space issue */}
        <div className="scroll-stack-end" style={{ height: '50vh' }} />
      </div>
    </div>
  );
};

// Enhanced Skills Component using ScrollStack
function Skills() {
  const handleStackComplete = () => {
    console.log('Skills stack animation completed!');
  };

  return (
    <div className="min-h-screen bg-white ">
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl font-bold text-black mb-4">
          Technical Skills
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Scroll to explore my technical expertise through an immersive stacking experience
        </p>
        <div className="w-24 h-1 bg-black mx-auto mt-6 rounded-full"></div>
      </div>

      {/* ScrollStack Container */}
      <ScrollStack
        useWindowScroll={true}
        itemDistance={120}
        itemScale={0.05}
        itemStackDistance={35}
        stackPosition="25%"
        scaleEndPosition="12%"
        baseScale={0.85}
        rotationAmount={1}
        blurAmount={1}
        onStackComplete={handleStackComplete}
        className="max-w-4xl mx-auto"
      >
        {info.map((category, index) => (
          <ScrollStackItem 
            key={category.title}
            itemClassName="skill-category-card"
          >
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mr-4 font-bold text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-black mb-2">{category.title}</h2>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-black h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min((category.content.length / 8) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-600 text-sm ml-3">
                      {category.content.length} skills
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.content.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative"
                  >
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 transition-all duration-300 group-hover:bg-black group-hover:border-black group-hover:scale-105">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center mr-3 group-hover:bg-gray-100 group-hover:border-gray-400 transition-colors duration-300">
                          <div className="text-lg text-gray-700 group-hover:text-black transition-colors duration-300">
                            {skill.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </div>
                          <div className="w-10 bg-gray-400 h-1 rounded-full mt-2 group-hover:bg-white group-hover:w-12 transition-all duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Footer */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Expertise Level</span>
                  <span className="text-black font-semibold">
                    {Math.round((category.content.length / 8) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      {/* Reduced bottom spacer */}
      <div className="h-20"></div>
    </div>
  );
}

export default Skills;