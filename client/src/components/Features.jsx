import React from "react";
import { howItWorksData, statsData, featuresData } from "../data/landing";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";
import { Globe } from "lucide-react";
import { useClerk, useUser } from "@clerk/clerk-react";

const Features = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  const handleDonationClick = () => {
    if (isSignedIn) {
      toast.info("You are already logged in.");
    } else {
      openSignIn();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Stats Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Enhance Your Alumni Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-6" key={index}>
                <CardContent className="space-y-4 pt-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Component Mounted  */}
      <Testimonial />

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Give Back to Your College?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of alumni who are supporting Islamiah College to
            enhance future generations’ academic and cultural experiences.
          </p>
          <a>
            <button
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce py-2 px-4 rounded-lg"
              onClick={(e) => handleDonationClick()}
            >
              Make a Donation Today
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Features;
