// get env in vite
let isExternal = true;

export const MENU = [
  {
    label: 'Docs',
    href: !isExternal ? '/docs' : 'https://milvus.io/docs',
    isExternal: isExternal,
  },
  // {
  //   label: "Tutorials",
  //   subMenu: [
  //     {
  //       label: "Bootcamp",
  //       href: !isExternal ? "/bootcamp" : "https://milvus.io/bootcamp",
  //       isExternal: isExternal,
  //     },
  //     {
  //       label: "Demo",
  //       href: !isExternal ? "/milvus-demos" : "https://milvus.io/milus-demos",
  //       isExternal: isExternal,
  //     },
  //     {
  //       label: "Video",
  //       href: "https://www.youtube.com/c/MilvusVectorDatabase",
  //       isExternal: true,
  //     },
  //   ],
  // },
  {
    label: 'Codelabs',
    href: '/',
    isExternal: false,
  },
  {
    label: 'Tools',
    subMenu: [
      {
        label: 'attu',
        href: 'https://github.com/zilliztech/attu',
        isExternal: true,
      },
      {
        label: 'Milvus_Cli',
        href: 'https://github.com/zilliztech/milvus_cli',
        isExternal: true,
      },
      {
        label: 'sizing',
        href: !isExternal ? '/tools/sizing' : 'https://milvus.io/tools/sizing',
        isExternal: isExternal,
      },
    ],
  },
  {
    label: 'Blog',
    href: !isExternal ? '/blog' : 'https://milvus.io/blog',
    isExternal: isExternal,
  },
  {
    label: 'Community',
    href: !isExternal ? '/community' : 'https://milvus.io/community',
    isExternal: isExternal,
  },
];
