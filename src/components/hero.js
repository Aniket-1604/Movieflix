export default function Hero() {
  //Hero section for homepage
  return (
    <div className="relative h-full w-full">
      <div
        id="hero-image"
        className="blur-sm absolute top-0 left-0 right-0 bottom-0"
      />
      <div className="bg-gray-900/[0.8] text-white z-5">
        <div className="mx-auto max-w-screen-xl px-4 py-48 lg:py-32 lg:flex h-screen items-center">
          <div className="sm:mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-7xl sm:text-8xl font-extrabold text-transparent">
              MovieFlix
            </h1>
            <p className="mx-auto mt-8 sm:mt-4 max-w-xl text-2xl sm:text-3xl sm:leading-relaxed">
            Unlock The Universe Of Movie Magic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
