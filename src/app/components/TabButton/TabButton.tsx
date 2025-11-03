import Link from "next/link";

type Props = {
  href: string;
  isActive: boolean;
  activeColor: "blue" | "green";
  children: React.ReactNode;
};

export default function TabButton({ href, isActive, activeColor, children }: Props) {
  const activeColors = {
    blue: "bg-blue-600 text-white font-semibold",
    green: "bg-green-600 text-white font-semibold"
  };

  return (
    <Link 
      href={href}
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive 
          ? activeColors[activeColor]
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </Link>
  );
}
