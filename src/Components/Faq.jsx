import React from 'react';
import useTitle from './Shared/useTitle';

const Faq = () => {
    useTitle('FAQ')
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Car Doctor
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Here</span>
                        </span>{' '}
                        Are Some Frequently asked Qustion with Answer.
                    </h2>
                    <p className="text-base font-medium md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="border border-gray-800 p-4 shadow-lg hover:shadow-gray-700 duration-300 delay-150">
                            <p className="mb-4 text-xl font-bold">
                                Why think Are you Best?
                            </p>
                            <p className="font-medium">
                                Space, the final frontier. These are the voyages of the Starship
                                Enterprise. Its five-year mission: to explore strange new
                                worlds.
                                <br />
                                <br />
                                Many say exploration is part of our destiny, but it’s actually
                                our duty to future generations.
                            </p>
                        </div>
                        <div className="border border-gray-800 p-4 shadow-lg hover:shadow-gray-700 duration-300 delay-150">
                            <p className="mb-4 text-xl font-bold">
                                The first mate and his Skipper too will do?
                            </p>
                            <p className="font-medium">
                                Well, the way they make shows is, they make one show. That
                                show's called a pilot.
                                <br />
                                <br />
                                Then they show that show to the people who make shows, and on
                                the strength of that one show they decide if they're going to
                                make more shows. Some pilots get picked and become television
                                programs.Some don't, become nothing. She starred in one of the
                                ones that became nothing.
                            </p>
                        </div>
                        <div className="border border-gray-800 p-4 shadow-lg hover:shadow-gray-700 duration-300 delay-150">
                            <p className="mb-4 text-xl font-bold">
                                Is the Space Pope reptilian!?
                            </p>
                            <p className="font-medium">
                                A flower in my garden, a mystery in my panties. Heart attack
                                never stopped old Big Bear. I didn't even know we were calling
                                him Big Bear.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="border border-gray-800 p-4 shadow-lg hover:shadow-gray-700 duration-300 delay-150">
                            <p className="mb-4 text-xl font-bold">
                                How much money you got on you?
                            </p>
                            <p className="font-medium">
                                The first mate and his Skipper too will do their very best to
                                make the others comfortable in their tropic island nest.
                                <br />
                                <br />
                                Michael Knight a young loner on a crusade to champion the cause
                                of the innocent. The helpless. The powerless in a world of
                                criminals who operate above the law. Here he comes Here comes
                                Speed Racer. He's a demon on wheels.
                            </p>
                        </div>
                        <div className="border border-gray-800 p-4 shadow-lg hover:shadow-gray-700 duration-300 delay-150">
                            <p className="mb-4 text-xl font-bold">
                                Galaxies Orion's sword globular star cluster?
                            </p>
                            <p className="font-medium">
                                A business big enough that it could be listed on the NASDAQ goes
                                belly up. Disappears!
                                <br />
                                <br />
                                It ceases to exist without me. No, you clearly don't know who
                                you're talking to, so let me clue you in.
                            </p>
                        </div>
                        <div className="border border-gray-800 p-4 shadow-lg hover:shadow-gray-700 duration-300 delay-150">
                            <p className="mb-4 text-xl font-bold">
                                When has justice ever been as simple as a rule book?
                            </p>
                            <p className="font-medium">
                                This is not about revenge. This is about justice. A lot of
                                things can change in twelve years, Admiral. Well, that's
                                certainly good to know. About four years. I got tired of hearing
                                how young I looked.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="my-20">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                                <h3 className="text-3xl font-semibold">Car Doctor</h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Repair Your Favourite Car </h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2020</time>
                                    <p className="mt-3">Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Aliquam sit amet nunc ut</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2019</time>
                                    <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2016</time>
                                    <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;