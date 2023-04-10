import { BrandGithub } from "tabler-icons-react";

const sections = [
  {
    name: "Company",
    options: ["About", "Carrers", "Brand Center", "Blog"],
  },
  {
    name: "Help center",
    options: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
  },
  {
    name: "Legal",
    options: ["Privacy Policy", "Licensing", "Terms & Conditions"],
  },
  {
    name: "Download",
    options: ["iOS", "Android", "Windows", "MacOS"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        {sections.map((section) => (
          <div key={section.name}>
            <h2 className="mb-6 text-sm font-semibold uppercase">{section.name}</h2>
            <ul className="space-y-4 text-white">
              {section.options.map((option) => (
                <li key={option}>
                  <a href="#" className=" hover:underline">
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto flex justify-between p-6">
        <span>Copyright © 2023 Virtual Store</span>
        <a
          href="https://github.com/kypexfly/cybertech"
          className="flex items-center"
        >
          <BrandGithub />
        </a>
      </div>
    </footer>
  );
}
