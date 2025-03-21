export function InputField({ label, type, name, value, onChange, placeholder, required }) {
    return (
        <div>
            <label className="block font-medium">{label} {required}<span className="text-red-500">*</span></label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-2 border border-gray-200 rounded-md focus:ring focus:ring-purple-300"
                required={required}
            />
        </div>
    );
}