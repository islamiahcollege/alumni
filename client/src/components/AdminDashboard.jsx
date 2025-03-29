import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaQuoteRight, FaUsers, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { AppContext } from "@/context/AppContext";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let testimonialsCount = testimonials.length;

  const { backendUrl } = useContext(AppContext);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(backendUrl + "/api/company/getFeed");
        setTestimonials(response.data.testimonials || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []); // Run once on mount

  // Delete the Testimonial
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      try {
        console.log(id);
        const response = await axios.post(
          `${backendUrl}/api/company/deleteFeed`,
          {
            testimonialId: id,
          }
        );
        if (response.data.success) {
          setTestimonials((prevTestimonials) =>
            prevTestimonials.filter((testimonial) => testimonial._id !== id)
          );
          toast.success("Testimonial deleted successfully!");
        } else {
          throw new Error(response.data.message);
        }
      } catch (err) {
        setError(err.message);
        toast.error("Testimonial not found");
      }
    }
  };

  return (
    <>
      <div className="shadow py-4">
        <div className="container px-4 2xl:px-20 sm:px-10 max-sm:px-4 mx-auto flex justify-between overflow-hidden items-center">
          <div className="max-sm:w-1/3 md:w-1/2">
            <Link to={"/"}>
            <p className="text-gradient">Islamiah college alumni</p></Link>
          </div>

          <div className="flex gap-4 max-sm:text-xs">
            <Link to={"/admin"}>
            <button className="bg-cyan-400 text-white px-6 sm:px-9 py-2 rounded-md">
              New Admin
            </button></Link>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100">
        {" "}
        {/* Stats Section */}
        <section className="py-20 bg-blue-50 ">
          <div className="container mx-auto w-full px-4 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 gap-8">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <FaQuoteRight className="text-4xl text-blue-600 mb-2 mx-auto" />
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {testimonialsCount}
                </div>
                <div className="text-gray-600">Total Testimonials</div>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <FaUsers className="text-4xl text-green-600 mb-2 mx-auto" />
                <div className="text-4xl font-bold text-green-600 mb-2">
                  250
                </div>
                <div className="text-gray-600">Logged-in Users</div>
              </div>
              {/* Add more stats as needed */}
            </div>
          </div>
        </section>
        {/* Recent Testimonials Section */}
        <section id="recent-testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              All Testimonials
            </h2>
            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="min-w-full table-auto">
                <thead className="bg-blue-100/40 rounded-full">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Professional</th>
                    <th className="px-4 py-2 text-left max-sm:hidden">
                      Message
                    </th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((testimonial) => (
                    <tr key={testimonial._id} className="border-b">
                      <td className="px-4 py-2">{testimonial.name}</td>
                      <td className="px-4 py-2">{testimonial.professional}</td>
                      <td className="px-4 py-2 max-sm:hidden">
                        {testimonial.message.slice(0, 50)}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleDelete(testimonial._id)} // Pass the ID to the delete function
                          className="text-red-600 hover:text-red-900 flex items-center"
                        >
                          <FaTrashAlt className="mr-1 max-sm:hidden" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Manage Your Alumni Site Effectively
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Take control of feedback and user engagement to foster a
              supportive community.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce py-2 px-4 rounded-lg">
              Explore More Features
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminDashboard;
