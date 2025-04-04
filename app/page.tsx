import Link from 'next/link';
import LogoCloud from '@/components/ui/LogoCloud';
import Footer from '@/components/ui/Footer/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-zinc-900 dark:text-white">
                Real People, Real Connections
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl">
                Connect with authentic people in a digital world. Our platform helps you build meaningful relationships without the noise.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/pricing"
                className="inline-flex h-10 items-center justify-center rounded-md bg-pink-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-700"
              >
                Get Started
              </Link>
              <Link
                href="#features"
                className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-8 text-sm font-medium text-zinc-900 dark:text-white shadow-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-pink-100 dark:bg-zinc-800 px-3 py-1 text-sm text-pink-600 dark:text-pink-500">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-zinc-900 dark:text-white">
                Everything You Need
              </h2>
              <p className="max-w-[900px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform provides all the tools you need to connect with real people and build authentic relationships.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-pink-600 dark:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Verified Profiles</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-center">
                Every profile is verified to ensure you're connecting with real people.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-pink-600 dark:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Privacy First</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-center">
                Your data is secure and your privacy is our top priority.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-pink-600 dark:text-pink-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Meaningful Connections</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-center">
                Our algorithm matches you with people who share your interests and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-pink-100 dark:bg-zinc-800 px-3 py-1 text-sm text-pink-600 dark:text-pink-500">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-zinc-900 dark:text-white">
                What Our Users Say
              </h2>
              <p className="max-w-[900px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what people are saying about our platform.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            {/* Testimonial 1 */}
            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950">
              <div>
                <p className="text-zinc-600 dark:text-zinc-300 italic">
                  "This platform has completely changed how I connect with people online. The verification process gives me peace of mind, and I've made some genuine connections."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">Sarah Johnson</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Marketing Director</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="flex flex-col justify-between space-y-4 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950">
              <div>
                <p className="text-zinc-600 dark:text-zinc-300 italic">
                  "I was skeptical at first, but the quality of connections I've made here is unmatched. It's refreshing to have meaningful conversations without the usual social media noise."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-white">Michael Chen</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-zinc-900 dark:text-white">
                Ready to Connect with Real People?
              </h2>
              <p className="max-w-[600px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who are already building meaningful connections on our platform.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Link
                  href="/pricing"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-pink-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-700"
                >
                  Get Started
                </Link>
                <Link
                  href="/signin/signup"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-8 text-sm font-medium text-zinc-900 dark:text-white shadow-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700"
                >
                  Sign Up Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
        <div className="container px-4 md:px-6 mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-zinc-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[600px] mx-auto text-zinc-500 dark:text-zinc-400 md:text-xl">
            Choose the plan that's right for you and start connecting with real people today.
          </p>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex h-10 items-center justify-center rounded-md bg-pink-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-700"
            >
              View All Plans
            </Link>
          </div>
        </div>
        
        {/* Logo Cloud */}
        <LogoCloud />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
