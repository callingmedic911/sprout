import { MetaTags } from '@redwoodjs/web'

import ShowcaseListCell from 'src/components/Startup/StartupListCell'

const ListPage = () => {
  return (
    <>
      <MetaTags
        title="Startup Showcase"
        description="The landing page for the RedwoodJS startup showcase."
      />
      <section className="bg-gradient-to-r from-rw-600 to-rw-800 relative overflow-hidden z-0">
        <div className="max-w-screen-xl mx-auto py-12 px-8 space-y-6 text-center md:text-right relative z-10">
          <h1 className="relative text-5xl text-white drop-shadow-md">
            <span className="text-rw-200">RedwoodJS</span> Showcase
          </h1>
          <h2 className="text-lg text-rw-50 drop-shadow">
            Curated case-studies on the startups RedwoodJS empowers across the
            globe.
          </h2>
        </div>
        <svg
          className="absolute -left-28 -top-6 rotate-12 w-1/3 min-w-[26rem] max-w-md text-rw-500 text-opacity-50 z-0"
          fill="currentColor"
          viewBox="0 0 917 1000"
        >
          <path
            clipRule="evenodd"
            d="m249.557 144.582 194.171 132.54c4.383 2.918 9.502 4.516 14.755 4.606 5.261-.038 10.394-1.641 14.755-4.606l194.319-132.986c7.55-5.406 11.714-14.418 10.957-23.717-.757-9.298-6.322-17.507-14.646-21.6024l-194.171-96.13614c-7.366-3.573948-15.947-3.573948-23.313 0l-193.581 96.13614c-8.474 4.1174-14.113 12.4854-14.783 21.9354-.67 9.451 3.73 18.541 11.537 23.83zm274.879 174.144c.016 8.789 4.318 17.01 11.509 21.991l155.662 106.389c9.965 6.87 23.298 6.012 32.313-2.081l130.579-116.789c5.819-5.199 9.051-12.729 8.823-20.56s-3.892-15.158-10.004-20.005l-124.677-99.702c-9.062-7.199-21.704-7.68-31.28-1.189l-161.416 110.401c-7.064 4.89-11.35 12.914-11.509 21.545zm-387.163 144.724c6.292 5.652 9.526 13.988 8.706 22.437-.817 8.499-5.726 16.052-13.132 20.208l-92.9545 55.72c-9.4227 5.633-21.32 4.82-29.90183-2.041-8.5818-6.861-12.06543-18.346-8.75546-28.865l34.37839-108.172c2.6969-8.57 9.5328-15.175 18.1483-17.533 8.609-2.505 17.8924-.309 24.4928 5.795zm504.168 11.293-168.056-115.007c-8.931-6.01-20.578-6.01-29.509 0l-168.056 115.007c-6.684 4.626-10.919 12.061-11.509 20.208-.435 8.203 2.816 16.169 8.853 21.693l167.909 150.222c4.842 4.319 11.089 6.698 17.558 6.687 6.465-.002 12.708-2.38 17.558-6.687l167.908-150.222c6.056-5.501 9.265-13.5 8.705-21.693-.469-8.146-4.666-15.612-11.361-20.208zm-448.247-29.718-130.4316-116.79c-5.8687-5.331-9.1073-12.995-8.8528-20.95.1419-7.841 3.7705-15.204 9.8856-20.06l124.6768-100.296c9.126-7.179 21.793-7.658 31.428-1.189l161.269 110.401c7.484 4.908 11.998 13.293 11.998 22.288 0 8.994-4.514 17.38-11.998 22.288l-155.515 106.388c-10.025 6.841-23.376 5.985-32.46-2.08zm669.715 167.756-132.792-79.495c-9.862-5.943-22.415-4.739-30.985 2.972l-162.301 144.873c-6.846 6.114-10.062 15.362-8.499 24.441 1.563 9.08 7.681 16.698 16.171 20.135l225.157 91.233c3.088 1.283 6.397 1.939 9.738 1.932 10.449.033 19.936-6.142 24.197-15.751l69.79-156.314c5.68-12.37 1.157-27.062-10.476-34.026zm18.443-190.043 34.379 108.171h-.295c2.542 8.091 1.097 16.919-3.889 23.761-4.986 6.841-12.915 10.876-21.342 10.86-4.728.016-9.37-1.269-13.427-3.715l-93.102-55.72c-7.254-4.243-11.992-11.789-12.689-20.208-.87-8.456 2.373-16.814 8.705-22.436l59.019-52.6c6.668-5.976 15.881-8.156 24.493-5.795 8.609 2.459 15.423 9.098 18.148 17.682zm-492.511 282.761c1.587-9.042-1.597-18.266-8.41-24.368l-162.302-144.873c-8.57-7.711-21.123-8.915-30.985-2.972l-132.7921 79.495c-11.4977 6.995-16.0467 21.502-10.6233 33.878l69.9374 156.314c5.794 13.034 20.774 19.134 33.936 13.818l225.009-91.232c8.492-3.407 14.632-10.995 16.23-20.06zm79.675 44.577 180.598 73.105c8.83 3.779 14.93 12.084 15.935 21.694 1.143 9.729-3.178 19.291-11.214 24.814l-180.745 125.556c-4.331 3.043-9.473 4.7-14.754 4.755-5.277-.082-10.411-1.737-14.755-4.755l-180.597-125.556c-8.066-5.508-12.439-15.061-11.362-24.814 1.206-9.71 7.526-18.006 16.526-21.694l180.597-73.105c6.351-2.532 13.421-2.532 19.771 0z"
            fillRule="evenodd"
          />
        </svg>
      </section>
      <section className="max-w-screen-xl mt-10 mx-auto px-8">
        <div className="bg-gradient-to-r from-forest-200 to-forest-400 flex flex-col sm:flex-row items-center px-7 py-5 rounded-md space-x-0 sm:space-x-20 space-y-6 sm:space-y-0">
          <div className="flex-grow space-y-2.5">
            <h3 className="font-semibold text-xl text-forest-900">
              Founder of an upcoming startup?
            </h3>
            <p className="text-sm text-forest-800 leading-relaxed">
              Consider introducing yourself and your project on our forum.
            </p>
          </div>
          <a
            className="button-invert text-forest-600 hover:bg-forest-50 hover:text-forest-700 px-3 py-2 flex items-center space-x-3 whitespace-nowrap"
            href="https://community.redwoodjs.com/c/show-tell/7"
            rel="noreferrer"
            target="_blank"
          >
            <span>Reach Out</span>
            <span aria-hidden="true" className="icon md-18">
              launch
            </span>
          </a>
        </div>
      </section>
      <ShowcaseListCell />
    </>
  )
}

export default ListPage
