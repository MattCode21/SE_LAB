import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <Link
              to="/"
              className="flex items-center gap-2 text-primary font-semibold text-xl mb-4"
            >
              <span className="bg-primary text-white rounded-md h-8 w-8 flex items-center justify-center">
                A
              </span>
              <span>Alumni Affairs Network-NITC</span>
            </Link>
            <p className="text-muted-foreground">
              Connecting graduates with opportunities, events, and each other.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <SocialLink
              href="https://www.facebook.com/WORLDNITCAA/"
              icon={<Facebook className="h-5 w-5" />}
            />
            <SocialLink
              href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://x.com/official_nitcaa&ved=2ahUKEwjA87KC8aiMAxX9cGwGHahtHWgQFnoECBcQAQ&usg=AOvVaw0sVO3ZpqRcj_mHleBvgLF3"
              icon={<Twitter className="h-5 w-5" />}
            />
            <SocialLink
              href="https://www.instagram.com/nitcaa_official/"
              icon={<Instagram className="h-5 w-5" />}
            />
            <SocialLink
              href="https://in.linkedin.com/company/nitcaa"
              icon={<Linkedin className="h-5 w-5" />}
            />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Alumni Affairs Network-NITC. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <FooterLink href="/privacy" size="sm">
              Privacy Policy
            </FooterLink>
            <FooterLink href="/terms" size="sm">
              Terms of Service
            </FooterLink>
            <FooterLink href="/About" size="sm">
              Contact Us
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  size?: "default" | "sm";
}

function FooterLink({ href, children, size = "default" }: FooterLinkProps) {
  return (
    <Link
      to={href}
      className={`text-muted-foreground hover:text-foreground transition-colors ${
        size === "sm" ? "text-sm" : ""
      }`}
    >
      {children}
    </Link>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
    >
      {icon}
    </a>
  );
}
