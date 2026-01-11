import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center mb-12">
      <h2 className="text-4xl font-bold capitalize text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white">
        {children}
      </h2>
      <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2" />
    </div>
  );
}
