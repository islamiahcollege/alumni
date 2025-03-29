import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "./ui/card";
import { AppContext } from "@/context/AppContext";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error handling
  }

  return (
    <div>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Alumni Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-pink-400 text-center bg-pink-50 rounded px-2 py-0.5">
                        {testimonial.professional}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.message}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
