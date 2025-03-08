import { AppConstants } from "@/configs/constants";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">{AppConstants.appName}</h3>
            <p className="text-sm text-muted-foreground">
              {AppConstants.footerBio}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/portfolio" className="text-muted-foreground hover:text-primary">Portfolio</a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary">About</a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social Media</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                <a>
                  LinkedIn
                </a>
              </li>
              <li className="text-muted-foreground">
                <a>
                  Facebook
                </a>
              </li>
              <li className="text-muted-foreground">
                <a>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">{AppConstants.email}</li>
              <li className="text-muted-foreground">{AppConstants.phone}</li>
              <li className="text-muted-foreground">{AppConstants.shortAddress}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {AppConstants.appName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}