"use client"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form Data:", formData)
    setStatus("Message received! Check the console for details.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-tertiary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full h-32"
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-quaternary hover:bg-secondary">
              Send Message
            </Button>
            {status && <p className="mt-4 text-center text-secondary">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

