const Button = ({ children }: { children: React.ReactNode }) => {
    return (
        <button className="px-4 py-2 bg-blue-500 text-white">{children}</button>
    );
};

export default Button;