---
title: 'Data Fetching - GetStaticPaths'
date: '2022-03-03'
---
If a page has Dynamic Routes and uses `getStaticProps`, it needs to define a list of paths to be statically generated.
When you export a function called `getStaticPaths` (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by `getStaticPaths`.
```javascript
export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } }
    ],
    fallback: true // false or 'blocking'
  };
}
```
`getStaticPaths` must be used with `getStaticProps`. You cannot use it with `getServerSideProps`.

The `getStaticPaths` API reference covers all parameters and props that can be used with `getStaticPaths`.