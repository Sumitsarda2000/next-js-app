type Params = {
  params: {
    slug: string;
  };
};

// Generates metadata for each slug
export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

// Required for static export with dynamic routes
export async function generateStaticParams() {
  return [
    { slug: 'my-first-post' },
    { slug: 'hello-world' }
  ];
}

// Page component
export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
