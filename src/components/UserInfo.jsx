export function UserInfo({ name, email }) {
    return (
        <div class="grid grid-cols-3 gap-1">
            <p class="text-sm font-medium text-gray-500">ชื่อ: </p>
            <p class="text-sm col-span-2">{name}</p>            
            <p class="text-sm font-medium text-gray-500">อีเมล: </p>
            <p class="text-sm col-span-2">{email}</p>
        </div>
    );
}