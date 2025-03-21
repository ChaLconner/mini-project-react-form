export function TextArea({ label, name, value, onChange, placeholder }) {
    return (
        <div>
            <label className="block font-medium">{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full min-h-[80px] px-3 py-2 border border-gray-200 rounded-md focus:ring focus:ring-purple-300"
                row="4"
            />
        </div>
    );
}