import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
} from "lucide-react";

import emailJs from "@emailjs/browser";
import { cn } from "@/lib/util";
import { useState, useRef } from "react";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const dataProps = {
      from_name: name,
      from_email: email,
      to_name: "Ashraf Omid",
      subject: subject,
      message: message,
    };
    emailJs
      .send("service_0", "temp0r", dataProps, "7yM6CU0pUlh")
      .then((result) => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  }
  return (
    <section id="contacts" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In{" "}
          <span className="bg-gradient-to-l  from-primary/80 to-primary via-stone-200 bg-clip-text text-transparent">
            {" "}
            Touch
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a new project in mind or want to collaborate? Feel free to reach
          out. I am open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl mb-6 font-semibold">Contact Information</h3>
            <div className="space-y-6 items-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary " />
                </div>
                <div className="font-medium">
                  <h4>Email</h4>
                  <a
                    href="mailto:omidmashraf@gmail.com"
                    className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    omidmashraf@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary " />
                </div>
                <div className="font-medium">
                  <h4>Phone Number</h4>
                  <a
                    href="tel:+93794842517"
                    className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                  >
                    +93-794-84-25-17
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary " />
                </div>
                <div className="font-medium">
                  <h4>Location</h4>
                  <a className="text-muted-foreground transition-colors duration-300 hover:text-primary">
                    Kabul, Afghanistan
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4>Connect with me</h4>
              <div className="flex space-x-4 justify-center font-medium mb-4">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/m-ashraf-omid-91425b353?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEjwY7ry2QFm%2FJosbJvw8iA%3D%3D"
                >
                  <Linkedin />
                </a>
                <a href="#">
                  <Twitch />
                </a>
                <a href="#">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-2xs ">
            <h3 className="font-semibold mb-6 text-2xl">Send a message</h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium mb-2 "
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md border focus:outline-0 focus:ring-2 focus:ring-primary"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2 "
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md border focus:outline-0 focus:ring-2 focus:ring-primary"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email address"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2 "
                  htmlFor="subject"
                >
                  Message Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md border focus:outline-0 focus:ring-2 focus:ring-primary"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Message subject"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2 "
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 h-24 resize-none rounded-md border focus:outline-0 focus:ring-2 focus:ring-primary"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What is in your mind?"
                  required
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
