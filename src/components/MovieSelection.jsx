export function MovieSelection({ movie }) {
    return (
        <div class="grid grid-cols-3 gap-1">
            <p class="text-sm font-medium text-gray-500">หนังที่เลือก: </p>
            <p class="text-sm font-medium text-purple-700 col-span-2">{movie}</p>
        </div>
    );
}
