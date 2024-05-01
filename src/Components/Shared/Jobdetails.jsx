import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import imge from "../../assets/image/japan.svg";

const JobDetails = () => {
    const [job, setJob] = useState({});
    const { id } = useParams();
    const details = useLoaderData();

    useEffect(() => {
        const findJob = details?.jobs?.find((item) => item.id === id);
        setJob(findJob);
    }, [id, details]);

    return (
        <div className="w-full min-h-screen px-4 sm:px-10 md:px-20">
            <div key={job?.id} className="mb-6 mt-2">
                <div className="card w-full md:w-[70%] h-full mx-auto">
                    <div className="banner flex flex-col md:flex-row justify-center items-center h-[150px] gap-x-4 md:gap-x-28 bg-cover bg-center">
                        <div className="max-w-[500px] p-4 space-y-4">
                            <h1 className="text-2xl md:text-3xl mt-8 font-bold">
                                Submit information carefully
                            </h1>
                        </div>
                        <div className="">
                            <img
                                className="rounded-full mx-auto"
                                src={imge}
                                alt="Job Seeker"
                            />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-center mt-8 mb-3">Job Details</h1>
                    <div className="card-body">
                        <h2 className="card-title">{job?.title}</h2>
                        <p className="font-bold">{job?.company}</p>
                        <p>{job?.description}</p>
                        <div>
                            <p className="mt-2 mb-2 text-lg font-bold">Requirements:</p>
                            <p><strong>Education:</strong> {job?.requirements?.education}</p>
                            <p><strong>Experience:</strong> {job?.requirements?.experience}</p>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div>
                                <p className="font-medium">Category:</p>
                                <p className="font-light">{job?.category}</p>
                            </div>
                            <div>
                                <p className="font-medium">Location:</p>
                                <p className="font-light">{job?.location}</p>
                            </div>
                            <div>
                                <p className="font-medium">Type:</p>
                                <p className="font-light">{job?.type}</p>
                            </div>
                        </div>
                        <p><strong>Salary:</strong> {job?.salary}</p>
                        <h1 className="text-3xl font-bold text-center mt-3 mb-3">Your information</h1>
                        <form className="w-full">
                            <label className="flex flex-col">
                                <span className="font-bold mb-2">
                                    Write a Cover Letter
                                </span>
                                <textarea
                                    rows={4}
                                    name="letter"
                                    required
                                    placeholder="Write here:"
                                    className="py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6  rounded-lg outline-none border-none font-medium"
                                />
                            </label>
                        </form>
                        <p className="font-medium mt-2 mb-2">Add your Resume:</p>
                        <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                        <div className="card-actions justify-center mt-4">
                            <button className="btn" onClick={() => document.getElementById("my_modal_5").showModal()}>
                                Apply
                            </button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <h3 className="font-bold text-2xl">Congratulations!</h3>
                                    <p className="py-4">Your application has been submitted successfully.</p>
                                    <p className="py-2">Press ESC key or click the button below to close.</p>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* If there is a button in the form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;