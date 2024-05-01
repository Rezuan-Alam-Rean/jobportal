import { useEffect, useState } from "react";

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
        <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/3 lg:w-1/4  p-4 md:border-r-2 border-gray-200">
                <div className="space-y-4 w-[90%] mx-auto justify-center flex flex-col  ">
                    <h4 className="mt-6 mb-3 font-bold">Search jobs by name</h4>
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
                </div>
            </div>
            <div className="md:w-2/3 lg:w-3/4 p-4">
                {filteredJobs.map((job) => (
                    <div key={job.id} className="mb-6 mt-2">
                        <div className="card w-[95%] md:w-[70%] mx-auto h-full border-2">
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
    );
};

export default Jobs;
