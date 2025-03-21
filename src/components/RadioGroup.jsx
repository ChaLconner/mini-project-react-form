export function RadioGroup({ label, name, options, selectedValue, onChange }) {
    return (
        <div>
            <label className="block font-medium">{label}<span className="text-red-500"> *</span></label>
            {options.map((option, index) => (
                <div key={index} className="flex items-start gap-2 space-x-2 rounded-md p-2 hover:bg-slate-100 transition-colors">
                    <input
                        type="radio"
                        name={name}
                        value={option.title}
                        checked={selectedValue === option.title}
                        onChange={onChange}
                        className="h-4 w-4 mt-4"                    
                        required
                    />
                    <div className="flex flex-col">
                        <span>{option.title}</span>
                        <p className="text-gray-500">Director: {option.director}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

