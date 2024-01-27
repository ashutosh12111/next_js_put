"use client";
import React from "react";
import Head from "next/head";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import type Entity from "@ant-design/cssinjs/es/Cache";

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);

  // Extract styles during server rendering
  const styleTag = extractStyle(cache, true);

  return (
    <>
      <Head>
        <style
          id="antd"
          dangerouslySetInnerHTML={{ __html: styleTag }}
        />
      </Head>
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </>
  );
};

export default StyledComponentsRegistry;
