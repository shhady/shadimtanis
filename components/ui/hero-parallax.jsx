"use client";
import React,{useState, useEffect} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 1);
  const secondRow = products.slice(1, 2);
  const thirdRow = products.slice(2, 3);
  const fourthRow= products.slice(3,4)
  const fifthRow= products.slice(4,5)
  const sixthRow= products.slice(5,6)
  const seventhRow= products.slice(6,7)
  const eightthRow= products.slice(7,8)

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log(latest);
      setProgress(latest);
    });
  }, [scrollYProgress]);

  console.log(progress);
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  
  const initialTranslateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), springConfig);
  const initialTranslateX2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 500]), springConfig);
  const initialTranslateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const initialTranslateXReverse2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateX2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [1000, -1000]), springConfig);
  const translateXReverse2 = useSpring(useTransform(scrollYProgress, [0, 1], [1000, -450]), springConfig);

  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.3, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [2, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-1200, 500]), springConfig);
  return (
    ( <div
      ref={ref}
      className="h-[480vh] lg:h-[450vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 ">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={progress === 0 ? initialTranslateX : translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={progress === 0 ? initialTranslateXReverse : translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={progress === 0 ? initialTranslateX2 : translateX2} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  space-x-20">
          {fourthRow.map((product) => (
            <ProductCard product={product} translate={progress === 0 ? initialTranslateXReverse2 : translateXReverse2} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {fifthRow.map((product) => (
            <ProductCard product={product} translate={progress === 0 ? initialTranslateX2 : translateX2} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  space-x-20">
          {sixthRow.map((product) => (
            <ProductCard product={product} translate={progress === 0 ? initialTranslateXReverse2 : translateXReverse2} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {seventhRow.map((product) => (
            <ProductCard product={product} translate={progress === 0 ? initialTranslateX2 : translateX2} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  space-x-20">
          {eightthRow.map((product) => (
            <ProductCard product={product} translate={progress === 0 ? initialTranslateXReverse2 : translateXReverse2} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>)
  );
};

export const Header = () => {
  return (
    (<div className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full left-0 top-0">
    <h1 className="text-3xl md:text-7xl font-bold dark:text-white">
      الحل الكامل <br /> لكل احتياجات المنزل
    </h1>
    <p className="max-w-2xl text-2xl  md:text-xl mt-8 dark:text-neutral-200">
      نقدم لك كل ما تحتاجه لمنزلك، من مصممي الديكور الداخلي إلى وكلاء العقارات،
      خدمات التنظيف، المحامين العقاريين، مقاولي البناء والشقق، المهندسين المدنيين
      والمساحين. نحن فريق من المحترفين المتحمسين لتقديم أفضل الخدمات.
    </p>
  </div>
  )
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        // x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-1/2 relative flex-shrink-0">
      <Link href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={product.title} />
      </Link>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>)
  );
};
