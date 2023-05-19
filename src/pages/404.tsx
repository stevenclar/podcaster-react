import Link from "next/link";

const NotFoundPage = () => (
  <section className='flex items-center h-full p-16 text-gray-700'>
    <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
      <div className='max-w-md text-center'>
        <h2 className='mb-8 font-extrabold text-9xl'>
          <span className='sr-only'>Error</span>404
        </h2>
        <p className='text-2xl font-semibold md:text-3xl'>
          Sorry, we couldn&apos;t find this page.
        </p>
        <p className='mt-4 mb-8'>
          But don&apos;t worry, there are plenty of other things you can find on
          our homepage.
        </p>
        <Link
          href={"/"}
          className='px-8 py-3 font-semibold rounded border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition duration-300 ease-in-out'
        >
          Back to homepage
        </Link>
      </div>
    </div>
  </section>
);

export default NotFoundPage;
