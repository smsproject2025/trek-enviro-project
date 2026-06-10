import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { toast } from "sonner";

const EnquiryFormPopup = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  // Show popup after component mounts (when site opens)
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleAppsScriptUrl = process.env.REACT_APP_GOOGLE_APPS_SCRIPT_URL;

    if (!googleAppsScriptUrl) {
      toast.error(
        "Please configure REACT_APP_GOOGLE_APPS_SCRIPT_URL in frontend/.env.local before submitting."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(googleAppsScriptUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const result = await response.json();

      if (result?.success === false) {
        throw new Error(result.error || "Submission failed");
      }

      toast.success("Thank you for your enquiry! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setOpen(false);
    } catch (error) {
      console.error("Google Apps Script submission error:", error);
      toast.error("Unable to submit enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-800">
            Get In Touch
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Have questions about our environmental solutions? Send us an enquiry and we'll respond promptly.
          </DialogDescription>
        </DialogHeader>

        {/* <form  action="https://formsubmit.co/trekenviro@gmail.com"  method="POST" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 123-4567890"
                value={formData.phone}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company/Organization</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project or enquiry..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
            >
              Maybe Later
            </Button>
          </div>
        </form> */}


        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScTDiLiSgl7SIkkt-LnBtBqB6RMSbqC5rLFkD5iv_0riUoxFQ/viewform?embedded=true" width="400" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


      </DialogContent>
    </Dialog>
  );
};

export default EnquiryFormPopup;