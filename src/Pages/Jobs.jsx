import { useEffect, useState } from "react";
import imge from "../assets/image/japan.svg"
const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        fetch("jobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data?.jobs));
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const showAllJobs = () => {
        setFilter("");
        setSort(""); // Reset the sort state as well
    };

    const filteredJobs = jobs
        .filter((job) => {
            return filter ? job.category === filter : true;
        })
        .filter((job) => {
            return sort ? job.type === sort : true;
        })
        .filter((job) => {
            return (
                job.title.toLowerCase().includes(searchTerm) ||
                job.description.toLowerCase().includes(searchTerm) ||
                job.company.toLowerCase().includes(searchTerm)
            );
        });

    return (

        <div>
            <div>
                <div className=" bannerdark flex   flex-col md:flex-row justify-center items-center  h-[200px] gap-x-28 bg-cover bg-center">
                    <div className="max-w-[500px]  p-4 space-y-7">
                        <h1 className=" bannertext text-2xl lg:text-3xl font-bold  ">
                            Find Your Dream Job in JobHub
                        </h1>


                    </div>
                    <div className="w-full lg:w-1/3">
                        <img
                            className="rounded-full mx-auto "
                            src={imge}
                            alt="Job Seeker"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row  lg:w-full md:px-16">
                <div className="lg:w-1/4 p-4 md:border-r-2 border-gray-200 md:sticky md:top-0 md:h-screen overflow-auto">
                    <div className="space-y-4 w-[80%] mx-auto flex flex-col ">

                        <h4 className="mt-6 mb-3 font-bold">Search jobs </h4>
                        <input
                            className="input input-bordered"
                            placeholder="Search"
                            onChange={handleSearch}
                        />

                        <h4 className="mt-3 mb-3 font-bold">Sort jobs by type</h4>
                        <select
                            className="select select-bordered"
                            onChange={handleSortChange}
                            defaultValue=""
                        >
                            {Array.from(new Set(jobs.map((job) => job.type))).map(
                                (type, index) => (
                                    <option key={index} value={type}>
                                        {type}
                                    </option>
                                )
                            )}
                        </select>

                        <h4 className="mt-3 mb-3 font-bold">Filter jobs by category</h4>
                        <select
                            className="select select-bordered"
                            onChange={handleFilterChange}
                            defaultValue=""
                        >
                            {Array.from(new Set(jobs.map((job) => job.category))).map(
                                (category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                )
                            )}
                        </select>
                        <button
                            onClick={showAllJobs}
                            className="btn btn-outline  mb-4"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>
                <div className="md:w-2/3 lg:w-3/4  p-4">

                    <div className="w-[95%]    md:w-[79%] mx-auto">
                        <h3 className="mt-4  font-semibold  mb-8 " >Find jobs with salaries up to ¥6,200,000 per year</h3>
                        {filteredJobs.map((job) => (
                            <div key={job.id} className="mb-6 mt-2">
                                <div className="card  h-full border-2">
                                    <div className="card-body">
                                        <h2 className="card-title">{job.title}</h2>
                                        <p className="font-light text-xl">{job.company}</p>
                                        <p className="font-light text-sm">{job.description}</p>
                                        <div className="flex justify-between">
                                            <div>
                                                <p className="font-medium">Salary:</p>
                                                <p className="font-light">{job.salary}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Location:</p>
                                                <p className="font-light">{job.location}</p>
                                            </div>
                                            <div>
                                                <p className="font-medium">Type:</p>
                                                <p className="font-light">{job.type}</p>
                                            </div>
                                        </div>
                                        <div className="card-actions justify-end mt-4">
                                            <button className="btn btn-sm">View</button>
                                            <button className="btn btn-sm">Apply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Jobs;
