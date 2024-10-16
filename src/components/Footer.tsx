import React from 'react'
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">© 2024 Persona AI. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="link">Privacy Policy</Button>
            <Button variant="link">Terms of Service</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}