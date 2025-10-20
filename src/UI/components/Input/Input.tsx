type InputProps = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({type, placeholder, value, onChange}: InputProps) => {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    );
};