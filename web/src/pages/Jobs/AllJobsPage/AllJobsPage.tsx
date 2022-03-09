import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import JobsCell from 'src/components/Jobs/JobsCell'

const AllJobsPage = () => {
  return (
    <>
      <MetaTags title="AllJobs" description="AllJobs page" />

      <section className="max-w-screen-lg mx-auto">
        <header className="text-center">
          <h1 className="mt-36 text-orange-800">RedwoodJS Jobs</h1>
          <p className="mt-2 text-stone-500">
            Companies looking for RedwoodJS devs
          </p>
        </header>

        <div className="flex justify-end mt-4">
          <Link to={routes.newJob()} className="button-sm">
            + Post a Job
          </Link>
        </div>
        <div className="border border-orange-200 rounded-lg mt-2">
          <JobsCell />
        </div>
      </section>
    </>
  )
}

export default AllJobsPage
