import { useEffect, useState } from "react";

const Internships = () => {
    const [internships, setInternships] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        fetch("internships.json")
            .then((res) => res.json())
            .then((data) => setInternships(data?.internships));
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

    const showAllInternships = () => {
        setFilter("");
        setSort("");
    };

    const filteredInternships = internships
        .filter((internship) => {
            return filter ? internship.category === filter : true;
        })
        .filter((internship) => {
            return sort ? internship.type === sort : true;
        })
        .filter((internship) => {
            return (
                internship.title.toLowerCase().includes(searchTerm) ||
                internship.description.toLowerCase().includes(searchTerm) ||
                internship.company.toLowerCase().includes(searchTerm)
            );
        });

    return (
        <div className="flex flex-col sm:flex-row lg:w-full md:px-16">
            <div className="lg:w-1/4 p-4 md:border-r-2 border-gray-200 md:sticky md:top-0 md:h-screen overflow-auto">
                <div className="space-y-4 w-[80%] mx-auto flex flex-col ">
                    <h4 className="mt-6 mb-3 font-bold">Search internships </h4>
                    <input
                        className="input input-bordered"
                        placeholder="Search"
                        onChange={handleSearch}
                    />

                    <h4 className="mt-3 mb-3 font-bold">Sort internships by type</h4>
                    <select
                        className="select select-bordered"
                        onChange={handleSortChange}
                        defaultValue=""
                    >
                        {Array.from(new Set(internships.map((internship) => internship.type))).map(
                            (type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            )
                        )}
                    </select>

                    <h4 className="mt-3 mb-3 font-bold">Filter internships by category</h4>
                    <select
                        className="select select-bordered"
                        onChange={handleFilterChange}
                        defaultValue=""
                    >
                        {Array.from(new Set(internships.map((internship) => internship.category))).map(
                            (category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            )
                        )}
                    </select>
                    <button
                        onClick={showAllInternships}
                        className="btn btn-outline mb-4"
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
            <div className="md:w-2/3 lg:w-3/4 p-4">
                <div className="w-[95%] md:w-[79%] mx-auto">
                    <h3 className="mt-4 font-semibold text-3xl mb-8">Find Your Dream Internships</h3>
                    {filteredInternships.map((internship) => (
                        <div key={internship.id} className="mb-6 mt-2">
                            <div className="card h-full border-2">
                                <div className="card-body">
                                    <h2 className="card-title">{internship.title}</h2>
                                    <p className="font-light text-xl">{internship.company}</p>
                                    <p className="font-light text-sm">{internship.description}</p>
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="font-medium">Salary:</p>
                                            <p className="font-light">{internship.salary}</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Location:</p>
                                            <p className="font-light">{internship.location}</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Type:</p>
                                            <p className="font-light">{internship.type}</p>
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
    );
};

export default Internships;
