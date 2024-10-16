import Image from "next/image";

export default function BlogHeader() {
  return (
    <div className="blog-header">
      <Image
        src="/blog/images/alexandru-acea-XEB8y0nRRP4-unsplash.jpg"
        alt="Blog header image"
        width={1200}
        height={600}
        layout="responsive"
        priority
        style={{ zIndex: 0, position: "absolute" }}
      />
      <div
        style={{
          zIndex: 1,
        }}
      >
        <h1 className="blog-header-title">Coffee and Chat</h1>
        <h2 className="blog-header-title">A blog (mostly) about coding</h2>
      </div>
    </div>
  );
}
