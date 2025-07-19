import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.submit(); // trigger hidden form submission
    }
  };

  return (
    <Card className="p-8 border-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* VISIBLE FORM */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input name="name" id="name" placeholder="Your full name" required />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input name="email" id="email" type="email" placeholder="your@email.com" required />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <Label htmlFor="projectType">Project Type *</Label>
            <Select name="projectType" required>
              <SelectTrigger>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indicator">Custom Indicator</SelectItem>
                <SelectItem value="ea">Expert Advisor</SelectItem>
                <SelectItem value="script">Trading Script</SelectItem>
                <SelectItem value="modification">Modification</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="budget">Budget Range</Label>
            <Select name="budget">
              <SelectTrigger>
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-200">Under $200</SelectItem>
                <SelectItem value="200-500">$200 - $500</SelectItem>
                <SelectItem value="500-1000">$500 - $1000</SelectItem>
                <SelectItem value="1000-plus">$1000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="timeline">Timeline</Label>
            <Select name="timeline">
              <SelectTrigger>
                <SelectValue placeholder="When needed?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asap">ASAP</SelectItem>
                <SelectItem value="1-week">Within 1 week</SelectItem>
                <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                <SelectItem value="1-month">Within 1 month</SelectItem>
                <SelectItem value="flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="description">Project Description *</Label>
          <Textarea
            name="description"
            id="description"
            placeholder="Please describe your project requirements in detail..."
            rows={6}
            required
          />
        </div>

        <div className="flex justify-center">
          <Button type="submit" size="lg" variant="trading" className="px-12">
            Send Project Request
          </Button>
        </div>
      </form>

      {/* HIDDEN HTML FORM FOR FORMSUBMIT */}
      <form
        ref={formRef}
        action="https://formsubmit.co/fxcoder0909@gmail.com"
        method="POST"
        className="hidden"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://192.168.100.5:8080/" />

        {/* Matching fields that get filled by JS (optional if you want JS sync) */}
      </form>
    </Card>
  );
};
